# Ivory Performance Test Script
A Jmeter script that simulates user journeys through the Ivory web app.

At present, they do not interact with the underlying ODATA service. They terminate at the point at which a user is about to visit GovPay.
## Prerequisites for local installation
It is recommended that you run the tests on a cloud testing platform such as Blazemeter. 
Follow the below instructions for installation on Ubuntu 20.04 or macOS.

### Installation of Jmeter and Taurus on Ubuntu 20.04 LTS
#### Jmeter
```
# Tested with OpenJDK 11 but should work fine with the default option for Ubuntu
sudo apt install default-jre
wget https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.4.1.zip
# or download from https://jmeter.apache.org/download_jmeter.cgi
unzip apache-jmeter-5.4.1.zip
cp apache-jmeter-5.4.1 path/to/jmeter
wget https://jmeter-plugins.org/files/packages/jpgc-graphs-basic-2.0.zip
# or download from jmeter-plugins.org
unzip jpgc-graphs-basic-2.0.zip
cp -R lib/ext path/to/jmeter/lib/ext
cp -R lib path/to/jmeter/lib
rm -R lib
# add the following to your ~.bashrc
export PATH=$PATH:/path/to/jmeter/bin
# start a new terminal window
jmeter
```
#### Taurus
(from https://gettaurus.org/install/Installation/)
```
sudo apt-get update
sudo apt-get install python3 default-jre-headless python3-tk python3-pip python3-dev libxml2-dev libxslt-dev zlib1g-dev net-tools
sudo python3 -m pip install bzt
```

### Installation of Jmeter and Taurus on macOS
Does not work on macOS Monterey at time of writing.
You will require Java 11 or similar.

#### Jmeter

```
curl -O https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.4.1.zip
curl -O https://jmeter-plugins.org/files/packages/jpgc-graphs-basic-2.0.zip
# unzip and merge the files into your Jmeter install directory
```
#### Taurus
```
# simplest using homebrew
brew update
brew install bzt
# note that this does require that the xcode command line developer tools. If you haven't installed them
xcode-select --install
# then re-run 
brew install bzt
```

## Setup and execution
Clone this repository

### Use on Blazemeter
1. Create a new test in Blazemeter.
2. Set the load configuration in your blazemeter.yaml [ Read the Blazemeter Taurus reference](https://guide.blazemeter.com/hc/en-us/articles/360000864389-Calibrating-a-Taurus-Test).
2. Upload the files from this directory (apart from env.sh and config.yaml)
4. Select run test.

### For local use without Taurus
Recommended for debugging only.
1. Edit the configuration values in the env.sh file
2. Set the load configuration in ivory.jmx.
3. Before each test, run the command
    ```
    . env.sh
    ```
### For local use with Taurus
1. Edit the values in the config.yaml to
    - configure your test
    - point to your jmeter install directory
    - set the load configuration
    - adjust your minimum and maximum memory limits, if necessary
2. Execute in the cloned directory:
    ```
    bzt config.yaml 
    ```
It may take around a minute for the first summary statistics to appear in the Taurus console.

add -o modules.console.disable=true option if you encounter memory leak issues with the Taurus UI.

###  Variables
Editable via the config.yaml, blazemeter.yaml or env.sh
| name               | description      | required |      notes        |
|--------------------|------------------|:--------:|------------------:|
| scheme | BrowserStack automate username   | yes  | http or https |
| host | Target Environment url |    yes   | e.g. yourhost.com |    
| username | basic auth username | yes |String |
| password | basic auth password | yes  |String  |
| email | email for simulated user | yes  |String  |
| use_address_lookup | use the address lookup or strings for international addresses  | yes  | the string false will not use the lookup (recommended). Contact the project team for permission to use this  |
| use_gov_pay | use the address lookup or strings for international addresses  | yes  | Not yet implemented. Do NOT use the live GovPay address. Contact GDS for info on performance test instances. |
| gov_pay_url | gov pay test / mock instance url  | no - not yet implemented    | Not yet implemented. Do NOT use the live GovPay address. Contact GDS for info on performance test instances. |

## Reporting

Taurus or a Taurus/Jmeter compatible load testing SAAS should provide adequate reporting but Jmeter itself also outputs the following files to your working directory.

aggregate.csv, errors.csv, summary.csv, response-times.csv, threads.csv, upload-failures.csv

They can be opened within Jmeter which will automatically aggregate the files or display them as a graph in the test plan's listeners.

