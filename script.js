// Dữ liệu mẫu của 8 người chơi
const players = [
    { name: "Player 1", score1: 10, score2: 15, score3: 20 },
    { name: "Player 2", score1: 12, score2: 14, score3: 18 },
    { name: "Player 3", score1: 8, score2: 17, score3: 22 },
    { name: "Player 4", score1: 15, score2: 13, score3: 19 },
    { name: "Player 5", score1: 9, score2: 16, score3: 21 },
    { name: "Player 6", score1: 11, score2: 19, score3: 16 },
    { name: "Player 7", score1: 13, score2: 10, score3: 17 },
    { name: "Player 8", score1: 14, score2: 12, score3: 18 }
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