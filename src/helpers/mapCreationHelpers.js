export function createGameMap(scene) {
  const map = scene.make.tilemap({ key: "map" });

  const tileset = map.addTilesetImage("2Dsprites", "tiles", 32, 32);

  const layer1 = map.createLayer(0, tileset);

  layer1.setInteractive();

  const resourceText = createContainerText(
    scene,
    `Resources: ${scene.resources}`,
    { x: 0, y: 0 }
  );
  const scoreText = createContainerText(scene, `Resources: ${scene.score}`, {
    x: 800,
    y: 0,
  });

  const waveTimeRemainingText = createContainerText(
    scene,
    `Time Until Next Wave: ${scene.timeUntilNextWave}`,
    {
      x: 350,
      y: 0,
    }
  );

  return { map, layer1, waveTimeRemainingText, scoreText, resourceText };
}

function createContainerText(scene, text, dimensions) {
  text = scene.add.text(dimensions.x, dimensions.y, text, {
    fontSize: "26px",
    backgroundColor: "#180727",
    fontFamily: "Work Sans",
    // @ts-ignore
    padding: 10,
  });

  return text;
}
