function getDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'Next day delivery';
            break;
        default:
            deliveryTime = 'Invalid package type. Please choose "standard", "express", or "overnight".';
    }

    return deliveryTime;
}

// Test cases
const packageTypes = ['standard', 'express', 'overnight', 'international'];

packageTypes.forEach(type => {
    console.log(`Package Type: ${type} - Estimated Delivery Time: ${getDeliveryTime(type)}`);
});

//Output
/*Package Type: standard - Estimated Delivery Time: 3-5 days
Package Type: express - Estimated Delivery Time: 1-2 days
Package Type: overnight - Estimated Delivery Time: Next day delivery
Package Type: international - Estimated Delivery Time: Invalid package type. Please choose "standard", "express", or "overnight". */