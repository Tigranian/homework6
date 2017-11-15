
<!DOCTYPE html>

<head>
    <title>DISCRETE_FAILED_NOOOO.....</title>
  <style>
#canvasboard {
            border: 1px solid #000;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: url("http://www.chiquiplanet.com/board_games/rec/tic-tac-toe.gif");
            background-size: 100% 100%;
            background-repeat: no-repeat;

        }
    
    
    </style>
</head>
<body>
    <canvas id="canvasboard" width=500 height=500></canvas>
    <script>
             
        const gameboard = document.getElementById('canvasboard');
        const canvasboard = gameboard.getContext('2d');
        

        var boardw = gameboard.width;
        var boardh = gameboard.height;
       
         
             let isWin = false;
             let isFirst = false;
             let isHuman = true;
                         
         
     
        function drawX(dx, dy) {
            const xImg = new Image();
            xImg.src = 'http://www.dreamincode.net/forums/uploads/post-97990-1260678617.png';
            xImg.onload = function () {
                canvasboard.drawImage(xImg, dx, dy, 150, 150);
            }
        };


        function drawO(dx, dy) {
            const oImg = new Image();
            oImg.src = 'http://www.dreamincode.net/forums/uploads/monthly_10_2010/post-0-12884151170642.png';
            oImg.onload = function () {
                canvasboard.drawImage(oImg, dx, dy, 150, 150);
            }
        };

          const boardarr = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
  
  

const nextMove = function(board) {
            for(let i = 0; i < board.length; i++) {
                for(let j = 0; j < board.length; j++) {
                    if(board[i][j] === '') {
                        return [i, j];
                    }
                }
            }
        };

const makeMove = function(board, coords, isX) {
            if(coords[0] >= 0 && coords[0] <= 2 && coords[1] >= 0 && coords[1] <= 2  ) {
            if(isX) {
              board[coords[0]][coords[1]] = "x";
            } else {
              board[coords[0]][coords[1]] = "0";
            }
            return 0;
          }
            return -1;
        };

const findWinner = function(board) {
          for(let i = 0; i < board.length; i++) {
            if(board[i][0]=== board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
              return {
                winner: board[i][1],
                winningLocations: [[i, 0], [i, 1], [i, 2]] // Winning locations horizontally

              }

            }
          }

          for(let i = 0; i < board.length; i++) {
            if(board[0][i]=== board[1][i] && board[2][i] === board[1][i] && board[0][i] !== '') {
              return {
                winner: board[0][i],
                winningLocations: [[0, i], [1, i], [2, i]]  // locatinos of winning Xo vertically 

              }
            }
          }
          if(board[0][0] === board[1][1] && board[0][0]===board[2][2] && board[0][0] !== '') { 
            return {
              winner: board[0][0],
              winningLocations: [[0, 0], [1, 1], [2, 2]]   // locations of winning diagonal 
            }
          }

          if(board[0][2]=== board[1][1] && board[0][2]==board[2][0]&& board[0][2]!== '') {
            return {
              winner: board[0][2],
              winningLocations: [[0, 0], [1, 1], [2, 2]]       /// locations of winning diagonal 
            }
          }
          if(board.toString().search(/([xo],){8}[xo]/) !== -1){
            return {
              winner: "nobody wins"
              
            }
          }
        };

gameboard.addEventListener('mousedown', function(e) {
            if(boardarr[Math.floor(e.offsetY/(boardw / 3))][Math.floor(e.offsetX/(boardw / 3))] === '') {
                boardarr[Math.floor(e.offsetY/(boardw / 3))][Math.floor(e.offsetX/(boardw / 3))] = 'x';
                drawX(Math.floor(e.offsetX/(boardw / 3)) * (boardw / 3), 
                  Math.floor(e.offsetY/(boardw / 3)) * (boardw / 3));
                isFirst = false;
                isHuman = false;
                if (findWinner(boardarr)){
                    alert(findWinner(boardarr).winner + " X YOU WON BABE");
                }
            }
            if(isWin) {
                for(let i = 0; i < boardarr.length; i++) {
                    for(let j = 0; j < boardarr.length; j++) {
                        boardarr[i][j] = '';
                    }
                }
                canvasboard.clearRect(0, 0, boardw, boardh);
                isWin = false;
                isFirst = true;
            }
            if(findWinner(boardarr)) {
                isWin = true;
            }
        });
        gameboard.addEventListener('mouseup', function(e) {
            if(!isFirst && !isWin && !isHuman) {
                isHuman = true;
                const next = nextMove(boardarr);
                if(makeMove(boardarr, next) === 0) {
                    makeMove(boardarr, next);
                    drawO(next[1] * (boardw / 3), next[0] * (boardw / 3));
                }
                if(findWinner(boardarr)) {
                    isWin = true;
                    if (findWinner(boardarr)){
                    alert(findWinner(boardarr).winner + " O YOU WON BABE");
                }
                }

            }
        });

                  
</script>
  </body>

