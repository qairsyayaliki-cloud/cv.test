
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar > i').forEach(el => {
    const w = el.getAttribute('data-width') || '0%';
    setTimeout(() => { el.style.width = w; }, 150);
  });

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModal');

  function openModal(title, bodyHtml) {
    if (!modal || !modalTitle || !modalBody) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
  }
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  
  document.querySelectorAll('.openProj').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      if (id === 'cv') {
        openModal('CV Interaktif', '<p>Demo proyek: dibuat dengan HTML, CSS, dan JavaScript. Ganti konten sesuai kebutuhan (nama, jurusan, proyek).</p><p>Link GitHub: <em>(tambahkan jika ada)</em></p>');
      } else {
        openModal('Proyek Mini', '<p>Deskripsi proyek, peran, teknologi, dan apa yang dipelajari.</p>');
      }
    });
  });

  
  const quickContact = document.getElementById('quickContact');
  if (quickContact) quickContact.addEventListener('click', () => {
    openModal('Kontak Cepat', '<strong>Email:</strong> nama@email.com<br><strong>Telepon:</strong> +62 812-3456-7890<br><strong>LinkedIn:</strong> linkedin.com/in/nama');
  });

  
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', () => {
    window.print();
  });

  
  

  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });
});