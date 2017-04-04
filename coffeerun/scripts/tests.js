
QUnit.test('DataStore', function(assert) {
    var ds = new App.DataStore();


    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');

    assert.deepEqual(ds.getAll(), {
        'james@bond.com': 'eshpressho',
        'm@bond.com': 'tea'
    });

    ds.remove('james@bond.com');
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea'
    });
    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.equal(ds.get('james@bond.com'), undefined);

});

QUnit.test('truck', function(assert) {

    //var myTruck = new Truck('ncc-1701', new DataStore());
    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });
    myTruck.printOrders();
    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        },
        'dr@no.com': {
            'coffee': 'decaf',
            'emailAddress': 'dr@no.com'
        },
        'm@bond.com': {
            'coffee': 'earl grey',
            'emailAddress': 'm@bond.com'
        }
    });
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();
    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        }
    });

});