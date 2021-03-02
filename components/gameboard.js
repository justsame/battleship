import React from 'react'
import { Text, View, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import styles from '../style/style'

let board = [];
let shipPos = [];
const NBR_OF_ROWS = 5;
const NBR_OF_COLS = 5;
const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'circle';

export default class gameboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameOn: false,
            gameEnded: false,
            status: 'The game is not running.',
            btnText: 'Start game',
            hits: 0,
            bombs: 15,
            ships: 3,
            time: 30
        }
        this.initializeBoard();
    }
    // RANDOM NUMBER GENERATOR
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    // INITIALIZES THE BOARD
    initializeBoard() {
        for (let i = 0; i < NBR_OF_ROWS * NBR_OF_COLS; i++) {
            board[i] = START;
        }
        // MAKES THE SHIP POSITION ARRAY
        for (let i = 0; i <= 2;) {
            let rand = this.getRandomInt(24);
            // IF RANDOM NUMBER IS NOT IN ARRAY ADD RANDOM NUMBER IN
            if (shipPos.indexOf(rand) === -1) {
                shipPos.push(rand);
                i++;
            }
        }
    }

    startTimer = () => {
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        this.checkWinner();
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1,
            });
        }
    }

    stopTimer = () => {
        clearInterval(this.interval);
    }

    startGame() {
        if (this.state.gameOn === false) {
            this.setState({
                gameOn: true,
                btnText: 'New game',
                status: 'The game is on!'
            });
            this.startTimer();
        } else {
            this.resetGame();
            this.stopTimer();
        }

    }

    checkWinner() {
        if (this.state.bombs === 0 && this.state.ships > 0) {
            this.stopTimer();
            this.setState({
                status: 'You ran out of bombs, and didnt sink all the ships',
                gameEnded: true,
            });
        }
        if (this.state.hits === 3) {
            this.stopTimer();
            this.setState({
                status: 'You sinked all the ships. Victory!',
                gameEnded: true,
            });
        }
        if (this.state.time === 0) {
            this.stopTimer();
            this.setState({
                status: 'Time out! You didnt sink all the ships.',
                gameEnded: true,
            });
        }


    }

    drawItem(number) {
        // CHECK IF CLICKED ICON MATCHES A SHIP
        if (this.state.gameOn === false || this.state.gameEnded === true) {
            this.setState({ status: 'Click the start button first.' })
        } else if (board[number] === START) {
            if (shipPos.indexOf(number) === -1) {
                board[number] = CROSS;
                this.state.bombs--;
            } else {
                this.state.ships--;
                this.state.hits++;
                this.state.bombs--;
                board[number] = CIRCLE;
            }

            this.checkWinner();
            this.setState({
            });
        }
    }

    chooseItemColor(number) {
        if (board[number] === CROSS) {
            return "#FF3031";
        }
        else if (board[number] === CIRCLE) {
            return "#45CE30";
        }
        else {
            return "#74B9FF";
        }
    }

    resetGame() {
        this.setState({
            gameOn: false,
            gameEnded: false,
            status: 'The game is not running.',
            btnText: 'Start game',
            hits: 0,
            bombs: 15,
            ships: 3,
            time: 30
        });
        this.initializeBoard();
    }

    render() {

        const firstRow = [];
        const secondRow = [];
        const thirdRow = [];
        const fourthRow = [];
        const fifthRow = [];

        for (let i = 0; i < NBR_OF_ROWS; i++) {
            firstRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS; i < NBR_OF_ROWS * 2; i++) {
            secondRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 2; i < NBR_OF_ROWS * 3; i++) {
            thirdRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 3; i < NBR_OF_ROWS * 4; i++) {
            fourthRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 4; i < NBR_OF_ROWS * 5; i++) {
            fifthRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        return (
            <View style={styles.gameboard}>
                <Text style={styles.gameinfo}>Time: {this.state.time} sec</Text>
                <View style={styles.flex}>{firstRow}</View>
                <View style={styles.flex}>{secondRow}</View>
                <View style={styles.flex}>{thirdRow}</View>
                <View style={styles.flex}>{fourthRow}</View>
                <View style={styles.flex}>{fifthRow}</View>
                <Text style={styles.gameinfo}>Hits: {this.state.hits} | Bombs: {this.state.bombs} | Ships: {this.state.ships}</Text>
                <Text style={styles.gameinfo}>Status: {this.state.status}</Text>
                <Pressable style={styles.button} onPress={() => this.startGame()}>
                    <Text style={styles.buttonText}>{this.state.btnText}</Text>
                </Pressable>
            </View>
        )

    }

}