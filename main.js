T({
  name: "test-tag",
  url: "https://github.com/mlizza/pico-example-target.git",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "1.0.0"
});
