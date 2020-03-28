T({
  name: "pico-test-one",
  url: "https://github.com/mlizza/pico-example-target.git?ref=02f3ebee0cbb7d1f14de45df5fc71b59aa95ec17",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "master"
});
