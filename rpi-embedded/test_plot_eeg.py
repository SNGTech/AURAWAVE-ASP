import numpy as np
import matplotlib.pyplot as plt

class EEGTester():
    def __init__(self):
        self.EEG_RAW_DATA = np.fromfile('./data/eeg.dat', sep="", count=1000)

    def plot_test(self):
        fig, ax = plt.subplots(figsize=(20, 10))
        ax.plot(np.arange(len(self.EEG_RAW_DATA)), self.EEG_RAW_DATA)
        ax.set_title("EEG Data Test Plot")
        plt.show()

tester = EEGTester()
tester.plot_test()
        