function preload() {}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(450, 250);
  video = createCapture(VIDEO);

  video.hide();
  mint_color = "";
}
function draw() {
  image(video, 0, 0, 640, 480);
  tint(mint_color);
}
function Apply_fitter() {
  mint_color = document.getElementById("color_name").value;
}
function take_snapshot() {
  save("student_name.png");
}
