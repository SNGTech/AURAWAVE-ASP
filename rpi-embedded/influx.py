import influxdb_client
from influxdb_client.client.write_api import SYNCHRONOUS
from datetime import datetime

class Influx():
    def __init__(self):
        self.BUCKET = "eeg_data"
        self.ORG = "AurawaveData"
        TOKEN = "Qgo8yHYFH6RV_Q7iWU3JYxO2CsuTgZRn_IkIje31vrDrGisFS3b2wdrl3sO-Lqmizvs87IPJoHebjaJL8-lb0Q==" # CHANGE ACCORDING TO your InfluxDB token
        # Store the URL of your InfluxDB instance
        URL="http://192.168.1.64:8086" # CHANGE ACCORDING TO IPv4 Address, port should match your InfluxDB port

        self.client = influxdb_client.InfluxDBClient(url=URL, org=self.ORG, token=TOKEN)

    def write_eeg_data(self, value):
        write_api = self.client.write_api(write_options=SYNCHRONOUS)
        point = [{
            "time": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f"),
            "measurement": "eeg_measurement_rpi",
            "tags": {
                "type": "eeg"
            },
            "fields": {
                "value": {
                    "Fp1": value
                }
            }
        }]
        write_api.write(bucket=self.BUCKET, org=self.ORG, record=point)

