# BLE Dahlia Service

This is an example program demonstrating BLE connectivity between a peripheral running bleno, and a central running noble.

The service represents a dahlia lighting situation with the following properties  

* lighting_scene - read / write. A value representing the type of lighting scenario (normal, move, or sleeping)

To run the peripheral example:

    node peripheral

And on another computer, connect as a central from [noble](https://github.com/sandeepmistry/noble/tree/master/examples/pizza).
You can also use a [web app](http://strangesast.github.io/bleno-web-pizza-example) using [Web Bluetooth](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web).
