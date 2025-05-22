
  const form = document.querySelector('form');
  const modal = document.getElementById('confirmModal');
  const modalContent = modal.querySelector('.modal-content');
  const confirmYes = document.getElementById('confirmYes');
  const confirmNo = document.getElementById('confirmNo');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent normal form submission
    modal.style.display = 'flex'; // Show modal
    // Reset modal content (in case it's reused)
    modalContent.innerHTML = `
      <h3>Confirm Product Addition</h3>
      <p>Are you sure you want to add this product?</p>
      <div class="modal-actions">
        <button id="confirmYes">Yes</button>
        <button id="confirmNo">No</button>
      </div>
    `;

    // Re-bind event listeners to new buttons
    modal.querySelector('#confirmYes').addEventListener('click', function() {
      // Replace modal content with success message
      modalContent.innerHTML = `
        <h3>Product Added Successfully ✅</h3>
        <p>Your product has been added to the system.</p>
        <div class="modal-actions">
          <button id="okButton">OK</button>
        </div>
      `;

      // Optional: actually submit the form
      // form.submit(); // Uncomment if needed

      modal.querySelector('#okButton').addEventListener('click', function () {
        modal.style.display = 'none';
        // Optional: reset form if needed
        // form.reset();
      });
    });

    modal.querySelector('#confirmNo').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });

  // Close modal if user clicks outside it
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });




// Functionality for Search Button

  document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#productsTable tbody tr');

    rows.forEach(row => {
        const productName = row.cells[1].textContent.toLowerCase();
        const sku = row.cells[2].textContent.toLowerCase();
        const category = row.cells[3].textContent.toLowerCase();

        if (productName.includes(query) || sku.includes(query) || category.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
