const { reloadApp, getAppUrl,blacklistLiveReloadUrl,blacklistCmdlineFormat } = require('detox-expo-helpers')


describe('Example', () => {
  it('should load the app', async () => {
    console.log("Lauching using reloadApp")
    await reloadApp();
    console.log("App launched")
    await expect(element(by.label('Open up App.js to start working on your app!'))).toBeVisible();
  });

  it('should load the app with the url', async () => {
    console.log("Lauching expo with URL")
    const url = await getAppUrl();
    const blacklist = await blacklistCmdlineFormat()
    console.log("Blacklist: ", blacklist)
    await device.launchApp({
      newInstance: true,
      sourceApp: 'host.exp.exponent',
      url,
      launchArgs: { 
        EXKernelDisableNuxDefaultsKey: true, 
        detoxPrintBusyIdleResources: 'YES',
        detoxURLBlacklistRegex: blacklist
      },
    })
    console.log("App launched")
    await expect(element(by.label('Open up App.js to start working on your app!'))).toBeVisible();
  });

 it('should open the app URL', async () => {
    console.log("Lauching expo")
    await device.launchApp({
      newInstance: true,
      sourceApp: 'host.exp.exponent',
      launchArgs: { 
        EXKernelDisableNuxDefaultsKey: true, 
        detoxPrintBusyIdleResources: 'YES',
      },
    })
    await blacklistLiveReloadUrl()
    const url = await getAppUrl();
    console.log("Opening app URL:", url);
    await device.openURL({url})
    console.log("App launched")
    await expect(element(by.label('Open up App.js to start working on your app!'))).toBeVisible();
  });
});
