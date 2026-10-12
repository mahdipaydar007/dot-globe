// --- Simplified continent outlines (lon lat) rasterised into a land mask ---
const LAND = [
    "-168 66,-162 70,-156 71,-141 70,-128 70,-115 68,-95 72,-85 69,-82 63,-93 59,-94 57,-85 55,-80 52,-79 57,-77 62,-70 60,-65 60,-61 56,-56 52,-60 48,-66 45,-70 43,-70 41.5,-74 40,-76 37,-76 35,-81 31,-80 26,-82 26,-83 29,-85 30,-89 30,-94 29.5,-97 27,-97.5 22,-96 19,-94 18,-91 19,-90 21,-87 21,-88 16,-84 15.5,-83 11,-80 9,-77.5 8.5,-78 7,-80 7.5,-83 8.5,-86 11,-87 13,-92 14.5,-96 15.8,-102 18,-105.5 20,-105.5 23,-108 25.5,-111 28.5,-114.7 31.7,-117 32.5,-118.5 34,-121 35,-122.5 37.5,-124 40.5,-124 46,-124.5 48.5,-123 49,-127 51,-130 55,-134 58,-140 60,-146 61,-152 59,-158 57,-163 55,-158 58.5,-162 60,-165 62,-166 64",
    "-114.7 32,-117 32.5,-116 30,-114 27.5,-112 25,-110 23,-109.5 23.3,-111 25.5,-113.5 28.5,-114.8 31",
    "-73 78,-60 82,-30 83.5,-20 80,-18 75,-22 70,-32 68,-42 60,-48 61,-53 66,-55 70,-60 76",
    "-77 8,-72 12,-68 10.5,-62 10.5,-60 8,-52 5,-50 0,-44 -2.5,-35 -5.5,-35 -9,-39 -14,-39 -18,-41 -22,-45 -24,-48.5 -26,-48.5 -28.5,-53 -34,-57 -35,-57 -38,-62 -39,-65 -41,-64 -43,-67 -46,-66 -48,-69 -51,-68.5 -53,-71 -54,-74 -52,-75 -48,-73.5 -42,-73.5 -37,-71.5 -30,-70.5 -20,-70.5 -18,-76 -14,-79 -8,-81 -5,-80 -2,-80 1,-78 2.5,-77.5 6",
    "-5.5 35.8,-2 35,3 36.8,10 37.2,11 35,10 33.5,15 32.3,20 31,20 32.5,25 32,32 31.2,34 28,35 24,37 21,38.5 18,40 15,43 12.5,51 12,51 10.5,48 5,42 -1,40 -4.5,39 -8,40.5 -11,40.5 -15,35 -20,35 -24,32.5 -26,32.5 -29,30 -31.5,27 -33.5,22 -34.2,18.5 -34.2,18 -32,15 -27,14.5 -22,12 -17,13.5 -11,12 -6,9 -1,9.5 3.5,6 4.3,4 6.3,-1 5,-5 5,-8 4.5,-12 7.5,-15 11,-17 14.5,-16.5 19,-13 27.5,-10 29.5,-9.5 32,-6 35.5",
    "49 -12,50.5 -15.5,47 -25,44 -24,43.5 -21,44.5 -16,48 -13.5",
    "-9 43,-9 37,-6 36.2,-2 36.8,0 38.5,3 42,3.5 43.3,6 43,9 44.3,12.5 42,16 38,18.5 40,16 41.5,12.5 44.5,13.5 45.5,19 42,19.5 40,22 37,23.5 38,24 40.5,26 40.8,29 41,27 37,30 36.2,36 36.5,36 34,34.5 31.5,35 28,39 21.5,42.5 16,43.2 12.7,45 12.8,49 14.5,52.5 16.3,55 17,57.5 19,59.8 22.5,58 23.7,56.5 26.3,55 25.3,52 24,51.5 25.7,50 26.5,48.5 29.5,48 30,50 30.3,51 28,53 26.7,56.5 27.2,57 25.7,61.5 25.2,66.5 25.4,68 23.5,72.5 21,73 17,75 12.5,77 8,78.5 9,80 13,80 15.5,82 17,85 19.8,87 21.5,89 22,91.5 22.5,94 19,94.5 16,97.5 16.5,98.5 13,98.5 8,100.2 6.5,101.5 3,103.5 1.4,104 3,103.3 6,101 6.8,100.3 12.5,102.5 12,105 8.7,106.5 10.5,109.2 12,109 15.5,106 19,108 21.5,110.5 20.3,113 22.3,117 23.5,120 26,122 29.5,121 32,119.5 34.5,122 37,119 37.3,118 39,121.5 39,121 40.5,124.5 40,126 37.5,126.5 34.8,129.3 35.2,129.5 37,128 39.5,130 42.3,133 43,136 44,140 48,140.5 51,138 53.5,135 54.5,137.5 54,140 57,143 59,150 59.5,155 59.5,156 57,156 51,158 52,160 54,163 57.5,162 60,166 60,170 60,177 62.5,180 65,180 69,170 69.8,160 69.5,150 71,140 72.5,130 71,128 73,113 73.8,110 77,105 77.5,100 76.5,95 76,90 75.5,87 74,80 73,73 71,69 68.5,60 68.5,55 68.5,44 68,41 67,33 69.5,28 71,25 71,20 70,15 68,12 65.5,8 63,5 61,5 58.5,8 58,10.5 59.3,12 57.5,13 55.5,16 56,18.5 59.5,17.5 61,17 62.5,21 64,25 65.5,21.5 63,21.5 61,23 60,28 60.3,30 60,26 59.4,24 58,21.5 57,21 55.5,19 54.5,14 54,11 54,10 56,8.5 57,8.2 55,8.8 54,7 53.5,4.5 52.5,3.5 51.3,1.5 50.9,-1.5 49.7,-4.5 48.5,-1.5 46.5,-1.5 43.5,-8 43.7",
    "-180 64.5,-180 69,-175 67.5,-170 66,-172 64.5",
    "-5.5 50,1.5 51,1.7 52.7,0 53.5,-1.5 55.5,-2 57.5,-3.5 58.6,-5 58.5,-6 56.5,-5 54.8,-3 54,-3 53.3,-4.5 53.3,-5 52,-3 51.4,-4.5 50.5",
    "-6 52,-6 54,-8 55.2,-10 54,-10 52",
    "-24 65.5,-22 66.4,-16 66.5,-13.5 65,-18 63.4,-22.5 63.8",
    "130.8 33.9,132 35.5,135.5 35.7,137 37.3,139.5 38.5,140 41,141.5 41.3,142 39.5,141 36,140 35,137 34.7,135 33.6,132.5 34",
    "140 42,140.5 43.5,142 45.4,145.5 43.3,143 42,141 42",
    "130 31.5,129.8 33.5,131.5 33.8,131.5 31.5",
    "95.3 5.6,97.5 5.2,100 2,104 -1.5,106 -3,106 -5.8,104.5 -5.8,101 -2.5,98 1.5,95.5 3.5",
    "105.5 -6.8,108 -6.3,111 -6.5,114.5 -7.8,114 -8.7,108 -8,106 -7.4",
    "109 1.5,110 -1,110.5 -3,114 -4,116 -3.5,117.5 0,119 5,117 7,115 5,113 3,111 2",
    "119 -5,119.5 0,121 1.2,125 1.5,123 0,121.5 -1.3,123 -4,121 -3,120.5 -5.5",
    "131 -0.8,134 -0.8,138 -1.8,145 -4.5,148 -6,150 -10.5,147 -10,143 -9,141 -9,138 -8,137.5 -5,133.5 -4,132 -2.5",
    "120 18.5,122 18.5,122 16,124 13,121 13.5,120 15",
    "122 7,123 8.5,126 9.5,126 6.5,125 5.8,123 7",
    "120 23,121.5 25,122 24.5,120.8 22",
    "80 9.7,81.8 7.5,80.6 6,79.8 7.5",
    "142 46,143.5 49,143.2 53.5,142 54,142 50",
    "52 71,56 74.5,68 77,62 75,55 72",
    "114 -22,122 -18,126 -14,130 -12,132 -11.5,136 -12,136.5 -15,140 -17.5,142 -10.8,145 -15,147 -19,150 -22.5,153 -26,153 -30,151 -34,150 -37.5,146 -39,144 -38.3,141 -38,138 -35,135.5 -34.8,134 -32.5,131 -31.5,124 -33,119 -34.8,115 -34,115 -30,113.5 -26",
    "145 -41,148 -41,147.5 -43.2,146 -43.5",
    "173 -35,175 -37,178 -37.7,176 -41.5,175 -41.5,174.5 -39.5,173.5 -36",
    "172.5 -40.5,174 -41.5,171 -44.5,169 -46.5,166.5 -46,168 -44,171 -42",
    "-85 22,-82 23,-77 21.5,-74.2 20.2,-77.5 20,-80 21.8",
    "-74.4 18.5,-72 19.8,-69 19,-68.5 18.3,-71 17.8,-74 18",
    "-80 73.5,-72 71.5,-62 67,-65 63,-72 64,-78 64.5,-73 68,-86 70",
    "-118 73,-105 73,-100 70,-110 68.5,-118 70",
    "-90 76.5,-80 76,-62 82,-80 83,-92 81",
    "-125 72,-120 74.5,-115 73.5,-120 71.5",
    "-59 47.7,-56 51.5,-53 47,-55 46.8",
    "11 78.5,18 80,27 80,20 77,14 77",
    "-180 -90,-180 -78,-160 -78,-150 -76.5,-130 -74.5,-100 -73.5,-80 -73,-72 -72,-65 -67,-60 -64,-57 -63.5,-60 -68,-62 -73,-58 -75.5,-45 -78.5,-30 -78,-15 -72,0 -70,20 -70,40 -68,60 -67,70 -69,80 -67,100 -66.5,120 -66.5,140 -66.5,150 -69,165 -71,170 -77,180 -78,180 -90",
    "12.5 38,15.6 38.3,15.1 36.7,12.4 37.6",
    "8.2 41,9.7 41.1,9.6 39.2,8.4 38.9",
    "8.6 42.9,9.5 43,9.4 41.4,8.7 41.6",
    "23.5 35.5,26.3 35.3,26.1 35,24 35.1",
    "32.3 35.1,34.5 35.6,34 34.9,32.5 34.7",
    "11.5 56,12.6 56,12.4 55.3,11.2 55.4",
    "132.5 33.9,134.5 34.2,134.2 33.4,133 32.8,132.5 33.2",
    "108.7 19.9,110.5 20.1,111 19.5,109.5 18.2,108.7 18.5",
    "124 -10,127.3 -8.5,125 -8.2,123.5 -9.4",
    "119.8 -8.5,123 -8.2,122.8 -8.8,119.9 -8.9",
    "115.5 -8.4,119 -8.3,118.5 -8.9,116 -9",
    "127.5 2,128.3 1.5,128.3 -0.5,127.5 0.3,127.4 1.5",
    "128 -3,130.8 -3.3,130.5 -3.9,128.3 -3.8",
    "124.2 12.5,125.7 12.2,125.2 10.2,124.4 11",
    "122 11.5,123.2 11,123.5 9.5,122.5 9.5,122 10.5",
    "-78.3 18.4,-76.2 18.2,-76.9 17.8,-78 18",
    "-67.2 18.5,-65.6 18.4,-65.8 18,-67 18",
    "-72.5 -53.8,-70 -52.8,-68.6 -52.7,-65.3 -54.6,-67.5 -55.3,-70 -55.1",
    "-61.2 -51.4,-57.8 -51.3,-58.7 -52.3,-60.8 -52.2",
    "-74.2 -41.8,-73.4 -41.8,-73.5 -43.4,-74.2 -43.2",
    "-128.3 50.7,-125.5 50.3,-123.5 48.4,-125.5 48.8",
    "-66 44,-64.5 45.4,-60 46,-60.3 45.4,-63.5 44.5",
    "93 79,105 80.5,103 78.5,96 78.4",
    "137 75,148 76.2,150 75,141 74",
    "177 -17,178.8 -16.3,178.5 -18.2,177.2 -18",
    "164.2 -20.2,167 -22.4,166.4 -22.4,164 -20.4",
    "-156 20,-155 19.5,-155.8 18.9,-156.1 19.6",
    "155.8 -6.5,157.5 -8.5,160.5 -9.8,158.5 -7.4",
    "148 -5.7,150.5 -5.2,152.2 -4.2,152.3 -5.6,149.5 -6.2",
    "-78.5 26.8,-77 26.7,-77.5 25.2,-78.8 25.6",
    "-61.9 10.8,-60.9 10.8,-61 10,-61.9 10.1",
    "21.7 36.5,23 36.4,23.2 37.5,22 38.1,21.3 37.6",
    "-85 21.9,-82.5 22.3,-82.7 21.6,-84.5 21.5"
];
const WATER = [
    "47 45,50 46.5,53 46,53 42,54 40,53.5 37,50 37,49 40,47.5 43",
    "28 41.5,28 44,30 46,33 46,35 45,38 47,41 43,41.5 41.5,36 41.5,32 41.5",
    "-92 46.7,-90 47.8,-88 48.8,-85 48.5,-84.6 47,-86 46.5,-88 46.9",
    "-87.8 42,-87.5 44,-86.3 45.9,-85 45.8,-86.5 44,-86.5 42",
    "-84.5 45.9,-82 46.2,-80.2 45.3,-80 44,-81.7 43.2,-82.5 44,-83.5 45.6",
    "-83.4 41.7,-80 42.6,-78.9 42.9,-81 42,-82.8 41.5",
    "-79.8 43.3,-77 43.6,-76.2 43.8,-77.5 43.3,-79.2 43.2",
    "-82 52.5,-79.5 51.5,-79.3 53,-80.5 54.5,-82.2 53",
    "31.8 -0.3,34 -0.3,33.9 -2.3,32 -2.6,31.7 -1.5",
    "104 51.5,106.5 52.2,109.5 55.5,108.7 55.8,105.5 53.2,103.8 52",
    "58.5 46.5,61 46.8,61.2 44.5,59 44.2,58 45",
    "-117 61.5,-113 62.5,-109 62.9,-111 61.2,-115 61.2",
    "-125 67,-121 67,-119 65.8,-122 64.9,-124.5 66",
    "-99 53,-97.8 53.9,-96.8 52,-97.2 50.5,-98.5 51.7",
    "30.2 61,32.8 61.2,32.3 60.2,30.8 60",
    "29.5 -3.3,30.4 -4.5,29.6 -7,29.2 -5.5",
    "33.7 -9.5,34.6 -11.5,34.2 -14,34.8 -13"
];
const LAND2 = ["32.5 45.4,33.7 46,36.5 45.3,36.6 45,35 44.6,33.5 44.5,32.6 45.3"];
const MW = 720, MH = 360;
const mc = document.createElement('canvas'); mc.width = MW; mc.height = MH;
const mx = mc.getContext('2d', { willReadFrequently: true });
function smooth(p, it, q) {
    for (let n = 0; n < it; n++) {
        const o = [];
        for (let i = 0; i < p.length; i++) {
            const a = p[i], b = p[(i + 1) % p.length];
            o.push([a[0] + (b[0] - a[0]) * q, a[1] + (b[1] - a[1]) * q], [a[0] + (b[0] - a[0]) * (1 - q), a[1] + (b[1] - a[1]) * (1 - q)]);
        }
        p = o;
    }
    return p;
}
function fillPolys(list, color) {
    mx.fillStyle = color;
    for (const s of list) {
        const pts = smooth(s.split(',').map(p => p.split(' ').map(Number)), 2, .2);
        mx.beginPath();
        pts.forEach(([lo, la], i) => { const x = (lo + 180) * 2, y = (90 - la) * 2; i ? mx.lineTo(x, y) : mx.moveTo(x, y); });
        mx.closePath(); mx.fill();
    }
}
mx.fillStyle = '#000'; mx.fillRect(0, 0, MW, MH);
fillPolys(LAND, '#fff'); fillPolys(WATER, '#000'); fillPolys(LAND2, '#fff');
const mask = mx.getImageData(0, 0, MW, MH).data;

// --- Fibonacci sphere of dots ---
const N = 24000, GA = Math.PI * (3 - Math.sqrt(5));
const PX = new Float32Array(N), PY = new Float32Array(N), PZ = new Float32Array(N), IS_LAND = new Uint8Array(N);
for (let i = 0; i < N; i++) {
    const y = 1 - 2 * (i + .5) / N, r = Math.sqrt(1 - y * y), t = GA * i;
    const x = Math.cos(t) * r, z = Math.sin(t) * r;
    PX[i] = x; PY[i] = y; PZ[i] = z;
    const lon = Math.atan2(x, z) * 180 / Math.PI, lat = Math.asin(y) * 180 / Math.PI;
    const mxp = Math.min(MW - 1, Math.floor((lon + 180) * 2)), myp = Math.min(MH - 1, Math.floor((90 - lat) * 2));
    IS_LAND[i] = mask[(myp * MW + mxp) * 4] > 127 ? 1 : 0;
}

// Keep only land dots (ocean is left empty), packed for a fast render loop
const _li = []; for (let i = 0; i < N; i++) if (IS_LAND[i]) _li.push(i);
const NL = _li.length, LX = new Float32Array(NL), LY = new Float32Array(NL), LZ = new Float32Array(NL);
_li.forEach((k, j) => { LX[j] = PX[k]; LY[j] = PY[k]; LZ[j] = PZ[k]; });

// --- State & interaction ---
const cv = document.getElementById('c'), ctx = cv.getContext('2d');
let W, H, DPR, R, cx, cy, spR = 0;
let lon = 0.5, lat = 0.45, vLon = 0, vLat = 0, idle = 0, dragging = false;
const BASE_SPIN = 0.12;
function resize() {
    W = innerWidth; H = innerHeight;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    if (W * H * DPR * DPR > 3.2e6) DPR = Math.max(1, Math.sqrt(3.2e6 / (W * H)));
    spR = 0;
    cv.width = W * DPR; cv.height = H * DPR;
    cx = W / 2; cy = H / 2;
}
addEventListener('resize', resize); resize();

const ptrs = new Map();
cv.addEventListener('pointerdown', e => {
    cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragging = true; vLon = vLat = 0;
});
cv.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    const k = 1 / (R || 300);
    lon -= dx * k; lat = Math.max(-1.3, Math.min(1.3, lat + dy * k));
    vLon = -dx * k * 60; vLat = dy * k * 60;
});
const end = e => { ptrs.delete(e.pointerId); if (!ptrs.size) { dragging = false; idle = 0; } };
cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);

// --- Render ---
let col = null, cf = 0;
function readColors() {
    const s = getComputedStyle(document.documentElement), g = n => s.getPropertyValue(n).trim();
    col = { land: g('--land'), sea: g('--sea'), glow: g('--glow'), star: g('--star'), s1: g('--s1'), s2: g('--s2') };
}
// --- Highlighted major capitals (hover for the city name) ---
const HL = `Washington, D.C.|-77.04 38.9;Ottawa|-75.7 45.4;Mexico City|-99.13 19.43;Bogotá|-74.07 4.71;Lima|-77.04 -12.05;Brasília|-47.9 -15.8;Santiago|-70.65 -33.45;Buenos Aires|-58.4 -34.6;London|-0.13 51.5;Paris|2.35 48.86;Madrid|-3.7 40.4;Berlin|13.4 52.5;Rome|12.5 41.9;Moscow|37.62 55.75;Kyiv|30.52 50.45;Ankara|32.86 39.93;Cairo|31.24 30.04;Abuja|7.49 9.07;Addis Ababa|38.75 9.03;Nairobi|36.82 -1.29;Kinshasa|15.3 -4.32;Pretoria|28.19 -25.75;Riyadh|46.72 24.63;Tehran|51.39 35.69;New Delhi|77.2 28.6;Islamabad|73.05 33.68;Beijing|116.4 39.9;Seoul|126.98 37.57;Tokyo|139.7 35.7;Bangkok|100.5 13.75;Jakarta|106.85 -6.2;Canberra|149.13 -35.28;Wellington|174.78 -41.29`.split(';').map(t => { const [n, c] = t.split('|'), [lo, la] = c.split(' ').map(Number), a = lo * Math.PI / 180, b = la * Math.PI / 180, k = Math.cos(b); return { n, x: k * Math.sin(a), y: Math.sin(b), z: k * Math.cos(a), sx: 0, sy: 0 }; });
const tip = document.getElementById('tip'); let mpx = -1, mpy = -1, hoverExp = 0, tipName = '';
cv.addEventListener('pointermove', e => { mpx = e.clientX; mpy = e.clientY; hoverExp = 0; });
cv.addEventListener('pointerleave', () => { mpx = -1; });
cv.addEventListener('pointerup', e => { if (e.pointerType === 'touch') { mpx = e.clientX; mpy = e.clientY; hoverExp = performance.now() + 2500; } });
// --- Shooting stars between capital cities ---
const CAP = `-77.04 38.9,-75.7 45.4,-99.13 19.43,-82.37 23.13,-74.07 4.71,-66.9 10.5,-78.5 -0.22,-77.04 -12.05,-68.15 -16.5,-47.9 -15.8,-70.65 -33.45,-58.4 -34.6,-56.2 -34.9,-57.6 -25.3,-79.52 8.98,-84.08 9.93,-90.5 14.63,-21.9 64.15,-0.13 51.5,-6.26 53.35,2.35 48.86,-3.7 40.4,-9.14 38.72,12.5 41.9,13.4 52.5,10.75 59.9,18.07 59.33,24.94 60.17,21 52.23,30.52 50.45,23.73 37.98,32.86 39.93,37.62 55.75,4.9 52.37,12.57 55.68,16.37 48.2,19.04 47.5,26.1 44.43,44.8 41.7,49.87 40.41,31.24 30.04,3.06 36.75,-6.84 34.02,10.18 36.8,13.19 32.89,32.53 15.5,-17.47 14.69,-8 12.65,2.1 13.5,15.05 12.1,7.49 9.07,-0.19 5.6,38.75 9.03,36.82 -1.29,32.58 0.35,35.74 -6.16,15.3 -4.32,13.23 -8.84,28.28 -15.4,31.05 -17.83,32.57 -25.97,28.19 -25.75,17.08 -22.56,47.5 -18.9,46.72 24.63,44.2 15.35,58.4 23.6,35.93 31.95,36.3 33.5,44.36 33.31,51.39 35.69,69.2 34.53,73.05 33.68,77.2 28.6,85.3 27.7,90.4 23.8,71.43 51.17,69.24 41.3,58.38 37.95,74.6 42.87,106.9 47.9,116.4 39.9,126.98 37.57,139.7 35.7,121.56 25.03,105.85 21.03,100.5 13.75,96.1 19.76,101.7 3.14,106.85 -6.2,120.98 14.6,147.18 -9.44,149.13 -35.28,174.78 -41.29`.split(',').map(p => { const [lo, la] = p.split(' ').map(Number), a = lo * Math.PI / 180, b = la * Math.PI / 180, c = Math.cos(b); return [c * Math.sin(a), Math.sin(b), c * Math.cos(a)]; });
const stars = [], TR = .3, TM = 26;
let spawnT = 1;
const ease = p => .35 * p + .65 * p * p;
function spawnStar(cl, sl, ct, st) {
    const vis = [];
    CAP.forEach((v, i) => { const z1 = v[0] * sl + v[2] * cl; if (v[1] * st + z1 * ct > .15) vis.push(i); });
    if (!vis.length) return;
    const a = vis[(Math.random() * vis.length) | 0];
    for (let t = 0; t < 40; t++) {
        const b = (Math.random() * CAP.length) | 0, A = CAP[a], B = CAP[b];
        const ang = Math.acos(Math.max(-1, Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2])));
        if (b !== a && ang > .25 && ang < 1.5) { stars.push({ a, b, ang, u: 0, dur: 1.1 + ang * 1.2, H: .04 + .12 * ang }); return; }
    }
}

// --- Faint graticule (lat/lon grid) so the sphere reads as a globe ---
const GRID = [], D2 = Math.PI / 180;
const gv = (lo, la) => { const a = lo * D2, b = la * D2, c = Math.cos(b); return [c * Math.sin(a), Math.sin(b), c * Math.cos(a), 0]; };
for (let lo = -180; lo < 180; lo += 30) for (let la = -88; la <= 88; la += 4) { const v = gv(lo, la); v[3] = la === -88 ? 1 : 0; GRID.push(v); }
for (let la = -60; la <= 60; la += 30) for (let lo = -180; lo <= 180; lo += 4) { const v = gv(lo, la); v[3] = lo === -180 ? 1 : 0; GRID.push(v); }
const L = [-.45, .55, .7], ll = Math.hypot(...L); L[0] /= ll; L[1] /= ll; L[2] /= ll;
const NB = 8;
// Pre-rendered dot sprites (a few sizes) are much cheaper to draw than thousands of arcs
const NS = 6; let SPR = [], SPH = [];
function buildSprites() {
    spR = R; SPR = []; SPH = [];
    const r0 = R * .0058 * Math.sqrt(13000 / 24000);
    for (let k = 0; k < NS; k++) {
        const r = r0 * (.45 + .55 * (k + .5) / NS) * DPR, w = Math.ceil(r * 2) + 2, c = document.createElement('canvas');
        c.width = c.height = w;
        const g = c.getContext('2d'); g.fillStyle = col.land; g.beginPath(); g.arc(w / 2, w / 2, r, 0, 7); g.fill();
        SPR.push(c); SPH.push(w / DPR / 2);
    }
}
let last = performance.now();
function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (!col) readColors();
    R = Math.min(W, H) * .43;
    if (!dragging) {
        idle += dt;
        lon += vLon * dt; lat = Math.max(-1.3, Math.min(1.3, lat + vLat * dt));
        const f = Math.exp(-dt * 3); vLon *= f; vLat *= f;
        if (idle > 1.5) lon -= BASE_SPIN * dt * Math.min(1, (idle - 1.5));
    }
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, W, H);

    ctx.globalAlpha = 1;

    const cl = Math.cos(lon), sl = Math.sin(lon), ct = Math.cos(lat), st = Math.sin(lat);
    // outline + faint grid, drawn beneath the dots
    ctx.lineWidth = 1;
    const gp = new Path2D(); let gx = 0, gy = 0, gv0 = false;
    for (const v of GRID) {
        const z1 = v[0] * sl + v[2] * cl, z2 = v[1] * st + z1 * ct;
        if (z2 < .02) { gv0 = false; continue; }
        const sx = cx + (v[0] * cl - v[2] * sl) * R, sy = cy - (v[1] * ct - z1 * st) * R;
        if (gv0 && !v[3]) { gp.moveTo(gx, gy); gp.lineTo(sx, sy); }
        gv0 = true; gx = sx; gy = sy;
    }
    ctx.strokeStyle = 'rgba(167,139,250,.16)'; ctx.stroke(gp);
    ctx.strokeStyle = 'rgba(200,175,255,.6)'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
    if (!SPR.length || Math.abs(R / spR - 1) > .02) buildSprites();
    ctx.globalAlpha = 1;
    for (let i = 0; i < NL; i++) {
        const x = LX[i], y = LY[i], z = LZ[i];
        const z1 = x * sl + z * cl, z2 = y * st + z1 * ct;
        if (z2 < 0) continue;
        const k = (z2 * NS) | 0, c = SPR[k >= NS ? NS - 1 : k], h = SPH[k >= NS ? NS - 1 : k];
        ctx.drawImage(c, cx + (x * cl - z * sl) * R - h, cy - (y * ct - z1 * st) * R - h, h * 2, h * 2);
    }
    // highlighted major capitals + hover label
    if (hoverExp && now > hoverExp) { mpx = -1; hoverExp = 0; }
    let hit = -1, best = 1e9; const hd = Math.max(12, R * .032);
    for (let i = 0; i < HL.length; i++) {
        const h = HL[i], z1 = h.x * sl + h.z * cl, z2 = h.y * st + z1 * ct;
        h.v = z2 > .08; if (!h.v) continue;
        h.sx = cx + (h.x * cl - h.z * sl) * R; h.sy = cy - (h.y * ct - z1 * st) * R;
        if (!dragging && mpx >= 0) { const d = Math.hypot(h.sx - mpx, h.sy - mpy); if (d < hd && d < best) { best = d; hit = i; } }
    }
    for (let i = 0; i < HL.length; i++) {
        const h = HL[i]; if (!h.v) continue;
        const on = i === hit, ph = (now / 2000 + i * .37) % 1, br = Math.sin(now / 420 + i * .9);
        // expanding pulse ring
        ctx.globalAlpha = (1 - ph) * .6; ctx.strokeStyle = '#d8c2ff'; ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.arc(h.sx, h.sy, R * (.01 + .05 * ph), 0, 7); ctx.stroke();
        // breathing glow + core
        ctx.globalAlpha = on ? .42 : .26 + .1 * br; ctx.fillStyle = '#d8c2ff';
        ctx.beginPath(); ctx.arc(h.sx, h.sy, R * (on ? .028 : .019 + .004 * br), 0, 7); ctx.fill();
        ctx.globalAlpha = 1; ctx.fillStyle = '#f4ecff';
        ctx.beginPath(); ctx.arc(h.sx, h.sy, R * ((on ? .0085 : .0062) + .0008 * br), 0, 7); ctx.fill();
    }
    if (hit >= 0) {
        if (tipName !== HL[hit].n) { tipName = HL[hit].n; tip.textContent = tipName; }
        tip.style.left = HL[hit].sx + 'px'; tip.style.top = HL[hit].sy + 'px'; tip.style.opacity = 1; cv.style.cursor = 'pointer';
    } else { tip.style.opacity = 0; cv.style.cursor = ''; }
    // shooting stars
    spawnT -= dt;
    if (spawnT <= 0) { spawnT = 1.2 + Math.random() * 2.6; if (stars.length < 3) spawnStar(cl, sl, ct, st); }
    ctx.lineCap = 'round'; ctx.strokeStyle = ctx.fillStyle = `rgb(${col.star})`;
    const pt = (S, t) => {
        const A = CAP[S.a], B = CAP[S.b], sn = Math.sin(S.ang), wa = Math.sin((1 - t) * S.ang) / sn, wb = Math.sin(t * S.ang) / sn;
        const x = wa * A[0] + wb * B[0], y = wa * A[1] + wb * B[1], z = wa * A[2] + wb * B[2], k = 1 + S.H * Math.sin(Math.PI * t);
        const x1 = x * cl - z * sl, z1 = x * sl + z * cl;
        return [x1 * k, (y * ct - z1 * st) * k, (y * st + z1 * ct) * k];
    };
    for (let n = stars.length - 1; n >= 0; n--) {
        const S = stars[n]; S.u += dt / S.dur;
        if (S.u > 1 + TR) { stars.splice(n, 1); continue; }
        const fade = S.u > 1 ? (1 + TR - S.u) / TR : Math.min(1, S.u * 6);
        let prev = null;
        for (let k = 0; k <= TM; k++) {
            const pk = Math.min(1, S.u - TR * k / TM); if (pk < 0) break;
            const q = pt(S, ease(pk)), ok = q[2] > 0 || q[0] * q[0] + q[1] * q[1] > 1;
            if (prev && ok && prev.ok) {
                const f = 1 - k / TM;
                ctx.globalAlpha = fade * Math.pow(f, 1.4) * .95; ctx.lineWidth = R * .008 * f + .4;
                ctx.beginPath(); ctx.moveTo(cx + prev.x * R, cy - prev.y * R); ctx.lineTo(cx + q[0] * R, cy - q[1] * R); ctx.stroke();
            }
            prev = { x: q[0], y: q[1], ok };
        }
        if (S.u <= 1) {
            const h = pt(S, ease(S.u));
            if (h[2] > 0 || h[0] * h[0] + h[1] * h[1] > 1) {
                ctx.globalAlpha = fade * .22; ctx.beginPath(); ctx.arc(cx + h[0] * R, cy - h[1] * R, R * .03, 0, 7); ctx.fill();
                ctx.globalAlpha = fade; ctx.beginPath(); ctx.arc(cx + h[0] * R, cy - h[1] * R, R * .009 + .6, 0, 7); ctx.fill();
            }
        } else {
            const e = pt({ a: S.a, b: S.b, ang: S.ang, H: 0 }, 1);
            if (e[2] > 0) {
                const q = (S.u - 1) / TR;
                ctx.globalAlpha = (1 - q) * .8; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(cx + e[0] * R, cy - e[1] * R, R * (.008 + .05 * q), 0, 7); ctx.stroke();
            }
        }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);