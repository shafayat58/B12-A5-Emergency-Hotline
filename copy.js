<script>
    document.addEventListener('DOMContentLoaded', () => {
      // Optional copy counter
      const copyCountEl = document.getElementById('copyCount');
      let copyCount = parseInt(copyCountEl?.textContent || '0', 10) || 0;

      // Copy helper with HTTPS + fallback support
      function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
          return navigator.clipboard.writeText(text);
        }
        // Fallback for non-HTTPS or older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } finally { document.body.removeChild(ta); }
        return Promise.resolve();
      }

      // Event delegation: handles all .copy-btn buttons (current and future)
      document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.copy-btn');
        if (!btn) return;

        // 1) Prefer explicit value from data-number
        let textToCopy = btn.dataset.number;

        // 2) Fallback: find an element marked data-copy-text within the same card
        if (!textToCopy) {
          const card = btn.closest('[data-card]');
          textToCopy = card?.querySelector('[data-copy-text]')?.textContent?.trim();
        }

        if (!textToCopy) {
          alert('Nothing to copy for this card.');
          return;
        }

        try {
          await copyText(textToCopy);

          // bump the counter (if present)
          if (copyCountEl) {
            copyCount += 1;
            copyCountEl.textContent = String(copyCount);
          }

          // assignment-style alert
          alert('Copied: ' + textToCopy);
        } catch (err) {
          console.error('Copy failed:', err);
          alert('Copy failed. Please copy manually.');
        }
      });
    });
  </script>