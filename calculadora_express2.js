const express = require('express');
const app = express();



app.get('/calcular', (req, res) => {
    const operacion = req.query.operacion;
    const n1 = parseFloat(req.query.numero1);
    const n2 = parseFloat(req.query.numero2);

    if (operacion === 'suma') {
        const resultado = n1 + n2;
        res.send(`El resultado es ${resultado}`);
    } else if (operacion === 'resta') {
        const resultado = n1 - n2;
        res.send(`El resultado es ${resultado}`);
    } else if (operacion === 'multiplicacion') {
        const resultado = n1 * n2;
        res.send(`El resultado es ${resultado}`);
    } else if (operacion === 'division') {
        if (n2 === 0) {
            res.status(400).send('No se puede dividir por cero');
        } else {
            const resultado = n1 / n2;
            res.send(`El resultado es ${resultado}`);
        }
    } else {
        res.status(400).send('Operación no válida');
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
