// Handle Delete Button
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        row.parentNode.removeChild(row);
        // In real app: call backend/JDBC to delete from DB
    });
});

// Modal Logic (UI only)
const modalBackdrop = document.getElementById('modalBackdrop');
const addProductModal = document.getElementById('addProductModal');
const bulkImportModal = document.getElementById('bulkImportModal');

// document.getElementById('addProductBtn').onclick = function() {
//     modalBackdrop.style.display = 'block';
//     addProductModal.style.display = 'flex';
// };

document.getElementById("addProductBtn").addEventListener("click", function() {
        // Open the form page (could be a new URL or inline form)
       window.location.href = "../AddForm/form.html";// Replace with your form page path
    });



document.getElementById('bulkImportBtn').onclick = function() {
    modalBackdrop.style.display = 'block';
    bulkImportModal.style.display = 'flex';
};
function closeModal() {
    modalBackdrop.style.display = 'none';
    addProductModal.style.display = 'none';
    bulkImportModal.style.display = 'none';
}
modalBackdrop.onclick = closeModal;
