const canvas = document.getElementById("nnCanvas");
const ctx = canvas.getContext("2d");

let numNodes = 50;
let nodes = [];
let connections = [];
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // ノード・接続をリセット
  nodes = [];
  connections = [];
  particles = [];
  initNodes();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function initNodes() {
  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    });
  }

  for (let i = 0; i < numNodes; i++) {
    for (let j = i + 1; j < numNodes; j++) {
      if (Math.random() < 0.05) {
        connections.push({ from: nodes[i], to: nodes[j] });
        particles.push({
          from: nodes[i],
          to: nodes[j],
          progress: Math.random(),
        });
      }
    }
  }
}

function drawNetwork() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 背景色
  ctx.fillStyle = "#132040";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 線
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  for (let conn of connections) {
    ctx.beginPath();
    ctx.moveTo(conn.from.x, conn.from.y);
    ctx.lineTo(conn.to.x, conn.to.y);
    ctx.stroke();
  }

  // ノード
  ctx.fillStyle = "white";
  for (let node of nodes) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // 光の粒
  for (let p of particles) {
    const x = p.from.x + (p.to.x - p.from.x) * p.progress;
    const y = p.from.y + (p.to.y - p.from.y) * p.progress;

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();

    p.progress += 0.01;
    if (p.progress > 1) p.progress = 0;
  }
}

function animate() {
  drawNetwork();
  requestAnimationFrame(animate);
}

animate();
