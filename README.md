# DataProjectNode
A tool for data visualization
## Come configurare l'IP e la porta del server
1. Scaricare la CLI di React [create-react-app](https://github.com/facebook/create-react-app)
2. Modificare il file di configuarazione in data-project/src/config.json con l'indirizzo e la porta del server desiderate
3. Da console di comando entrare nella cartella data-project ed eseguire il comando **npm run build**
4. Copiare la cartella build appena creata e sostituirla a quella presente nella cartella server
5. Nella cartella server modificare il file config.json con la porta desiderata

## Come far partire l'applicazione
1. Installare NodeJS sul dispositivo che farà da server
2. Scaricare la cartella server del progetto
3. Da console di comando andare nella cartella server e utlizzare il comando **node app**
4. La tua applicazione ora sta funzionando ed è accessibile dall'indirizzo IP e dalla porta scelte!