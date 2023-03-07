export function AdviceComponent() {

    const zoneArray = [
        {AQI: '0-50', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'},
        {AQI: '51-100', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'},
        {AQI: '0-50', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'},
        {AQI: '0-50', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'},
        {AQI: '0-50', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'},
        {AQI: '0-50', Level: 'Normal', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', statement: 'None'}
    ]
    return (
        <div>This will use an array of objects with each index associated with the correct zone. The info showing will correclate to that index</div>
    )
}