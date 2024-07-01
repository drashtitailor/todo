const express = require('express';
const boyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.arguments(bodyParser.json()); //Parse incoming JSON requests
)