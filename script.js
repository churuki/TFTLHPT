// Dữ liệu mẫu của 8 người chơi
const players = [
    { name: "Thọ Cá Kiểng", score1: 0, score2: 0, score3: 0 },
    { name: "Diddy Máy Khâu", score1: 0, score2: 0, score3: 0 },
    { name: "Phạm Phương Tâm", score1: 0, score2: 0, score3: 0 },
    { name: "Ruksi", score1: 0, score2: 0, score3: 0 },
    { name: "Một Đời Liêm Khiết", score1: 0, score2: 0, score3: 0 },
    { name: "TìnhThếPhútChót", score1: 0, score2: 0, score3: 0 },
    { name: "Lượm Tội Đồ", score1: 13, score2: 10, score3: 17 },
    { name: "Bé Nhi Spam", score1: 14, score2: 12, score3: 18 }
];

// Hàm tính tổng điểm của mỗi người chơi
function calculateTotalScore(player) {
    return player.score1 + player.score2 + player.score3;
}

// Sắp xếp các người chơi theo tổng điểm từ cao đến thấp
players.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));

// Chèn dữ liệu vào bảng
function updateTable() {
    const tableBody = document.getElementById("rankingTable");
    players.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score1}</td>
            <td>${player.score2}</td>
            <td>${player.score3}</td>
            <td>${calculateTotalScore(player)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Cập nhật bảng khi trang web tải xong
window.onload = updateTable;
