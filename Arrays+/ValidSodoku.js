var isValidSudoku = function(board) {

    //Brutal force

    // for(let i = 0; i < board.length; i++)
    // {
    //     const set = new Set();
    //     for(let j = 0; j < board[i].length; j++)
    //     {
    //         const cell = board[i][j];
    //         if(cell === '.') continue
    //         if(set.has(cell)) return false;
    //         set.add(cell)
    //     }
    // }

    // for(let i = 0; i < board.length; i++)
    // {
    //     const set = new Set();
    //     for(let j = 0; j < board[i].length; j++)
    //     {
    //         const cell = board[j][i];
    //         if(cell === '.') continue
    //         if(set.has(cell)) return false;
    //         set.add(cell)
    //     }
    // }

    // for(let i = 0; i < 3; i++)
    // {
    //     for(let j =0; j < 3; j++)
    //     {
    //         for(let k = i; k < 3; k++)
    //         {
    //             for(let l = 0; l < 3; l++)
    //             {
    //                 const cell = board[3 * i + k][3 * j + l];
    //                 if(cell === '.') continue;
    //                 if(set.has(cell)) return false;
    //                 set.add(cell)
    //             }
    //         }
    //     }
    // }

    // return true


    //Array of sets solution

    // const rows = [], columns = [], boxes = [];

    // for(let i = 0; i < board.length; i++)
    // {
    //     rows.push(new Set());
    //     columns.push(new Set());
    //     boxes.push(new Set());
    // }

    // for(let i = 0; i < board.length; i ++) 
    // {
    //     for(let j = 0; j < board[i].length; j++)
    //     {
    //         const cell = board[i][j];
    //         if(cell === '.') continue;
    //         const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
    //         if(rows[i].has(cell) || columns[j].has(cell) || boxes[boxNum].has(cell)) 
    //             return false;
    //         rows[i].add(cell);
    //         columns[j].add(cell);
    //         boxes[boxNum].add(cell);
    //     }
    // }

    // return true

    //String in Set Solutions

    const set = new Set();

    for(let i = 0; i < board.length; i ++)
    {
        for(let j = 0; j < board[i].length; i++)
        {
            const cell = board[i][j];
            if(cell === '.') continue;
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);

            const row = `rows: ${i}, value: ${cell}`;
            const columns = `columns: ${j}, value: ${cell}`;
            const boxes = `boxes: ${boxNum}, value: ${cell}`;

            if(set.has(row) || set.has(columns) || set.has(boxes)) return false;

            set.add(row);
            set.add(columns);
            set.add(boxes);
        }
    }

    return true;
}