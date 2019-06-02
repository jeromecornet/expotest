const { reloadApp, getAppUrl } = require('detox-expo-helpers')


describe('Example', () => {
  it('should load the app', async () => {
    console.log("Lauching using reloadApp")
    await reloadApp();
    console.log("App launched")
    await expect(element(by.text('Open up App.js to start working on your app!'))).toBeVisible();
  });

 it('should open the app URL', async () => {
    console.log("Lauching expo")
    await device.launchApp({
      newInstance: true,
      sourceApp: 'host.exp.exponent',
      launchArgs: { EXKernelDisableNuxDefaultsKey: true},
    })
    const url = await getAppUrl();
    console.log("Opening app URL:", url);
    await device.openURL({url})
    console.log("App launched")
    await expect(element(by.text('Open up App.js to start working on your app!'))).toBeVisible();
  });
});
