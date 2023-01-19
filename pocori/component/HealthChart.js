import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const HealthChart = () => {
    return (
        <>
            <LineChart
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [62.5, 62.3, 62.4, 62.1, 61.9, 61.3],
                            strokeWidth: 2,
                        }
                    ]
                }}
                width={Dimensions.get('window').width - 32}
                height={220}
                chartConfig={{
                    backgroundColor: '#555',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 5,
                    },
                }}
                style={{
                    marginVertical: 5,
                    borderRadius: 10,
                }}
            />
        </>
    );
}
export default HealthChart;