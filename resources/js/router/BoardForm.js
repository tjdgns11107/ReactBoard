import React, {useState, useEffect, createContext} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { Table } from "react-bootstrap";
import { set } from 'lodash';

export const BoardContext = createContext();

const BoardForm = ({history}) => {
    const [boardNum, setBoardNum] = useState('*');
    const [boardList, setBoardList] = useState('');
    // const [boardNum, setBoardNum] = useState('');
    const [boardArray, setBoardArray] = useState([]);

    useEffect( () => {
        const boardData = {
            input: boardNum,
        }
        console.log(boardNum);
        Axios
            .post('/board', boardData)
            .then(result => {
                console.log(result);
                const boards = result.data;
                // const boards = result.data.data;
                console.log('board num', boardNum);
                console.log('board get result', result, "rsdt", boards);
                setBoardArray(boards);
                console.log(boards[0]);
                console.log(boards[0].id);
            })
            .catch(err => {
                console.log('board get err', err);
            })
    }, [])


    const loadBoard = (input) => {
        setBoardNum(input);

        const boardData = {
            input,
        }

        Axios
            .post('/board', boardData)
            .then(result => {
                const boards = result.data;
                // const boards = result.data.data;
                console.log('board num', boardNum);
                console.log('board get result', result, "rsdt", boards);
                setBoardArray(boards);
                console.log(boards[0]);
                console.log(boards[0].id);
            })
            .catch(err => {
                console.log('board get err', err);
            })
    }
    const boardPageDiv = {
        textAlign: "center",
    }

    const boardPageDiv2 = {
        margin: "auto",
        width: "60%",
        marginTop: 20,
    }

    const boardBtn = {
        width: '20%',
        height: 50,
        fontSize: 20,
        backgroundColor: 'rgba( 255, 255, 255, 0.3 )',
        margin: 20,
        border: 0,
        outline: 0,
    }

    const tableId = {
        width: "10%",
    }

    const tableTitle = {
        width: "50%",
    }

    const tableView = {
        width: "10%",
    }

    const tableDate = {
        width: "30%",
    }

    return (
        <div className="boardPageDiv" style={boardPageDiv}>
            <div className="boardPageDiv2" style={boardPageDiv2}>
                <button
                    style={boardBtn}
                    onClick={e => loadBoard('*')}
                    type="button">
                    Home
                </button>
                <button
                    style={boardBtn}
                    onClick={e => loadBoard(1)}
                    type="button"
                    >
                    Notice
                </button>
                <button 
                    style={boardBtn}
                    onClick={e => loadBoard(2)}
                    type="button">
                    QnA
                </button>
                <button
                    style={boardBtn}
                    onClick={e => loadBoard(3)}
                    type="button">
                    Free
                </button>

                <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="tableId" style={tableId}>번호</th>
                            <th className="tableTitle" style={tableTitle}>제목</th>
                            <th className="tableView" style={tableView}>조회수</th>
                            <th className="tableDate" style={tableDate}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        { boardArray.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <Link to={`/board/{id}`}>
                                        <td>{value.id}</td>
                                        <td>{value.post_title}</td>
                                        <td>{value.post_view}</td>
                                        <td>{value.created_at}</td>
                                    </Link>
                                </tr>
                            );
                        }) }
                    </tbody>
                    </Table>
                </div>
            </div>
            {/* <button
                style={}
                type="button"
                onClick >
                게시글 작성
            </button> */}
        </div>
    );
}

export default BoardForm;