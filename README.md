<!-- # TBC-Concept

## პროექტის აღწერა
* რეპოზიტორია შექმნილია TBC x USAID პროექტის React.JS-ის კურსზე შესარჩევი პრაქტიკული დავალებისთვის, რომლის ფარგლებშიც შერჩეულ კანდიდატებს უნდა გადაგვეკოპირებინა/დაგვეკლონა "თიბისის" ოფიციალური ვებ-გვერდის ერთი სრული გვერდი. დავალების არამაშტაბურობისდა გამო, კლონი აწყობილია ე.წ Vanilla JavaScript-ით - არანაირი ბიბლიოთეკის გამოყენებით, მხოლოდ HTML, CSS და JS. შესაბამისად,






 ამ პროექტის გაშვებაც მარტივია: მხოლოდ VSCode-ში ჩაშენებული extension-ის (Live Server-ის) გამოყენებით შეგვიძლია პროექტი დავსტარტოთ development mode-ში.

## პროექტის სტრუქტურა

### TBC-Concept საქაღალდეში გვხვდება სამი ფოლდერი :

*


## Development Setup

To set up the development environment for EApp, you will need Node.js installed on your machine. After installing Node.js, clone the repository and install the dependencies:


```
git clone <repository-url>
cd eapp
npm install

```
## Dev Dependencies and Libraries

The application relies on the following main dependencies and libraries:

* Electron
* Electron Builder
* React
* Google APIs
* XLSX for Excel file operations
* React Toastify for notifications
* React Modal

### To install all development dependencies, run:

```
npm init react-app eapp
npm i -D electron electron-builder concurrently wait-on
npm i cross-env electron-is-dev
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm install react-toastify
npm install react-modal
npm install googleapis
npm install stream-browserify url util
npm install --save-dev webpack webpack-cli stream-browserify crypto-browserify process buffer
npm install xlsx
```

## Building for Linux
```
npm run build:linux
```
After building, you can install the application using:

```
sudo dpkg -i eapp_0.1.0_amd64.deb
```

## Building for Windows
#### To build the application for Windows on Linux, you need to prepare your environment with Wine and Mono:

```
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine64 wine32
sudo apt install mono-complete
```

#### Then, transfer the dist folder to a Windows environment and build the application:
```
npm run build:win
```
## Setting Default Filial
#### The application supports setting a default filial via environment variables:

### Linux
```
export DEFAULT_FILIAL="<filial_name>"
```
#### Log out and log back in, or run source ~/.profile to apply the changes.

### Windows
#### Set the environment variable using PowerShell:
```
[Environment]::SetEnvironmentVariable("DEFAULT_FILIAL", "<filian name>", "Machine")
```















 -->
