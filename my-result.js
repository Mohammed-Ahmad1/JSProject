
document.addEventListener('DOMContentLoaded', function() {
    // 🔍 Get quiz history from localStorage (saved by user.js)
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const tbody = document.getElementById('resultsBody');

    // ✏️ Generate table rows
    history.forEach((item, index) => {
        const percent = Math.round((item.score / item.total) * 100);
        const isPass = percent >= 50;
        const statusClass = isPass ? 'text-success fw-bold' : 'text-danger fw-bold';
        const scoreClass = isPass ? 'score-pass' : 'score-fail';
        const statusText = isPass ? 'Passed' : 'Failed';

        // Capitalize language name: "arabic" → "Arabic"
        const quizName = item.language.charAt(0).toUpperCase() + item.language.slice(1) + ': General MCQ Test';

        // 🟢 Insert row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${quizName}</td>
            <td>${item.date}</td>
            <td class="${scoreClass}">${percent}%</td>
            <td class="${statusClass}">${statusText}</td>
            <td>
                <button class="btn btn-sm btn-outline-info view-details" data-index="${index}">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // 🔍 Optional: Add click handler for "View" (future: show detailed answers)
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            alert(`You clicked on quiz #${parseInt(index)+1}.\n\n💡 Future: Show full report with correct/incorrect answers here.`);
            // Later: open modal or redirect to detailed report page
        });
    });
});