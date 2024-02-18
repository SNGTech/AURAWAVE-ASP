import RPi.GPIO as G
from ADS1263 import ADS1263
import numpy as np
import matplotlib.pyplot as plt
from influx import Influx

V_REF = 5.00
EEG_RAW_DATA = np.array([])

# fig, ax = plt.subplots(figsize=(20, 10))
# def animate(i):

try: 
    # Create InfluxDB Object
    influxdb = Influx()

    # Create ADC Object
    ADC = ADS1263()

    if ADC.ADS1263_init_ADC1('ADS1263_4800SPS') == -1:
        exit()

    # Set ADC to Single Channel Mode
    ADC.ADS1263_SetMode(0)

    # Read EEG voltage at all
    channelList = [0, 1]
    while True:
        ADC_Value = ADC.ADS1263_GetAll(channelList)
        for i in channelList:
            if ADC_Value[i] >> 31 == 1:
                voltage = (V_REF * 2 - ADC_Value[i] * V_REF / 0x80000000)
            else:
                voltage = (ADC_Value[i] * V_REF / 0x7fffffff) # 32bit
            if i == 0:
                EEG_RAW_DATA = np.append(EEG_RAW_DATA, voltage)
                influxdb.write_eeg_data(voltage)
            print("ADC1 IN%d = %f" % (i, voltage))
        for i in channelList:
            print("\33[2A")

    ADC.ADS1263_Exit()
except IOError as e:
    print(e)
except KeyboardInterrupt:
    ADC.ADS1263_Exit()

    EEG_RAW_DATA.tofile('./data/eeg.dat', sep="")

    exit()


    