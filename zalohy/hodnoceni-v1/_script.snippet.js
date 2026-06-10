  (function initRateModal() {
    var modal = document.getElementById('rateModal');
    if (!modal) return;
    var boatLabel = modal.querySelector('[data-rm-boat]');
    var commentEl = modal.querySelector('[data-rm-comment]');
    var actionsEl = modal.querySelector('.rate-modal-actions');
    var errorEl = null;
    var currentRow = null;
    var ratings = { boat: 0, charter: 0, yachtnet: 0 };

    function syncStars() {
      modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
        var key = group.dataset.rate;
        var val = ratings[key] || 0;
        group.querySelectorAll('.rate-star').forEach(function(btn) {
          var btnVal = parseInt(btn.dataset.val, 10);
          btn.classList.toggle('is-active', btnVal <= val);
        });
      });
    }

    function clearError() {
      if (errorEl) { errorEl.remove(); errorEl = null; }
    }

    function open(row, boatName) {
      currentRow = row;
      ratings = { boat: 0, charter: 0, yachtnet: 0 };
      syncStars();
      clearError();
      if (boatLabel) boatLabel.textContent = boatName || '';
      if (commentEl) commentEl.value = '';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = '';
      currentRow = null;
      clearError();
    }

    function renderStars(val) {
      var html = '';
      for (var i = 1; i <= 5; i++) {
        if (i <= val) html += '★';
        else html += '<span class="res-rate-stars-empty">☆</span>';
      }
      return html;
    }

    function submit() {
      if (!currentRow) return;
      if (!ratings.boat || !ratings.charter || !ratings.yachtnet) {
        clearError();
        errorEl = document.createElement('div');
        errorEl.className = 'rate-modal-error';
        errorEl.textContent = 'Ohodnoťte prosím všechny tři kategorie.';
        actionsEl.parentNode.insertBefore(errorEl, actionsEl);
        return;
      }
      currentRow.classList.add('res-rate-row--done');
      currentRow.innerHTML = '<div class="res-rate-display">' +
        '<span class="res-rate-item"><span class="res-rate-label">Loď:</span><span class="res-rate-stars">' + renderStars(ratings.boat) + '</span></span>' +
        '<span class="res-rate-item"><span class="res-rate-label">Charterovka:</span><span class="res-rate-stars">' + renderStars(ratings.charter) + '</span></span>' +
        '<span class="res-rate-item"><span class="res-rate-label">Yachtnet:</span><span class="res-rate-stars">' + renderStars(ratings.yachtnet) + '</span></span>' +
      '</div>';
      close();
    }

    // Open: klik na „Přidat hodnocení" — listener přímo na linku, aby inline
    // onclick="event.stopPropagation()" v HTML nepřerušil bublání před tímhle.
    document.querySelectorAll('.res-rate-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var row = link.closest('.res-rate-row');
        var card = link.closest('.res-card');
        var titleEl = card && card.querySelector('.res-title');
        open(row, titleEl ? titleEl.textContent : '');
      });
    });

    // Klik dovnitř modalu: hvězdy, zavřít, submit
    modal.addEventListener('click', function(e) {
      if (e.target.closest('[data-rm-close]')) { close(); return; }
      var star = e.target.closest('.rate-star');
      if (star) {
        var group = star.closest('.rate-stars-input');
        ratings[group.dataset.rate] = parseInt(star.dataset.val, 10);
        syncStars();
        clearError();
        return;
      }
      if (e.target.closest('[data-rm-submit]')) { submit(); return; }
    });

    // Hover preview hvězd
    modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
      group.addEventListener('mouseover', function(e) {
        var star = e.target.closest('.rate-star');
        if (!star) return;
        var hoverVal = parseInt(star.dataset.val, 10);
        group.querySelectorAll('.rate-star').forEach(function(btn) {
          btn.classList.toggle('is-hover', parseInt(btn.dataset.val, 10) <= hoverVal);
        });
      });
      group.addEventListener('mouseleave', function() {
        group.querySelectorAll('.rate-star.is-hover').forEach(function(b) { b.classList.remove('is-hover'); });
      });
    });

    // Escape zavře
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
  })();
