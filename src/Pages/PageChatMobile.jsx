import {
  Button,
  Stack,
  Typography,
  Avatar,
  Grid,
  Box,
  Input,
} from '@mui/material';
import { Colors } from '../Utils/Colors';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import {
  clearMessageList,
  createMessage,
  getAllChats,
  getAllMessages,
} from '../Redux/Actions/ChatActions/chatActions';
import getTimeDifference from '../helpers/diferenciaHoraria';
import EmisorMessage from '../Components/Chat/EmisorMessage';
import ReceptorMessage from '../Components/Chat/ReceptorMessage';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const PageChatMobile = () => {
  const [chatear, setChatear] = useState(false);
  const [arrayChat, setArrayChat] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [indexReceptor, setIndexReceptor] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { chats, messagesList } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom(); // Llama a esta función cuando se monte el componente
  }, [messagesList]);

  useEffect(() => {
    !chatear && dispatch(clearMessageList());
  }, [chatear]);

  const userId = user.id;

  useEffect(() => {
    if (userId) {
      dispatch(getAllChats(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (chats) {
      setArrayChat(Object.entries(chats));
    }
  }, [chats, userId]);

  useEffect(() => {
    if (socket && indexReceptor !== undefined) {
      const chatID = arrayChat[indexReceptor]?.[1]?.chatID;
      if (chatID) {
        socket.emit('joinChat', chatID);
      }

      // Escuchar mensajes entrantes
      const handleMessage = (message) => {
        dispatch(createMessage(message));
      };

      socket.on('message', handleMessage);

      // Limpiar el listener al desmontar el componente o cambiar de chat
      return () => {
        socket.off('message', handleMessage);
      };
    }
  }, [socket, arrayChat, indexReceptor]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (socket && nuevoMensaje.trim() !== '') {
      socket.emit('message', {
        message: nuevoMensaje,
        chatID: arrayChat[indexReceptor][1].chatID,
        emisorID: userId,
      });
      dispatch(
        createMessage({
          id: messagesList.length,
          chatID: arrayChat[indexReceptor][1].chatID,
          emisorID: userId,
          message: nuevoMensaje,
          createdAt: new Date(),
        })
      );
      // dispatch(getAllMessages(arrayChat[indexReceptor][1].chatID));
      // dispatch(getAllChats());
      setNuevoMensaje('');
    }
  };

  const serverURL = import.meta.env.VITE_URL_BACKEND;

  return (
    <>
      <Stack
        direction="row"
        justifyContent={'flex-start'}
        alignItems={'center'}
        p={2}
      >
        <svg
          width="24"
          style={{ marginLeft: '15px', cursor: 'pointer' }}
          onClick={() => navigate(-1)}
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_343_8051)">
            <path
              d="M23.25 12H0.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 1.5L0.75 12L11.25 22.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_343_8051">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(-1 0 0 -1 24 24)"
              />
            </clipPath>
          </defs>
        </svg>

        <Typography ml={2} fontSize="24px">
          Chats
        </Typography>
      </Stack>
      <Stack direction="row" alignItems={'center'}>
        {chatear && (
          <Avatar
            width="40px"
            src={`${serverURL}/api/${chats[indexReceptor].personWithChat.profile_image}`}
            height="40px"
          />
        )}
        <Typography ml={1} color={'#000'} fontSize={'16px'}>
          {chatear
            ? chats[indexReceptor].personWithChat.name +
              '  ' +
              chats[indexReceptor].personWithChat.lastname
            : 'Chats'}
        </Typography>
      </Stack>
      <Stack direction="column" maxWidth="100%">
        {!chatear ? (
          <>
            {chats ? (
              arrayChat?.map((e, index) => {
                return (
                  <>
                    <Stack
                      key={index}
                      direction={'row'}
                      width="100vw"
                      maxWidth="100%"
                      p={2}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(getAllMessages(e[1].chatID));
                        setChatear(true);
                        setIndexReceptor(index);
                      }}
                    >
                      <Avatar
                        width="40px"
                        src={`${serverURL}/api/${chats[indexReceptor]?.personWithChat.profile_image}`}
                        height="40px"
                      ></Avatar>
                      <Stack
                        direction="column"
                        ml={0.5}
                        maxWidth="100%"
                      >
                        <Typography fontSize={'12px'} color="#000">
                          {`${e[1].personWithChat.name} ${e[1].personWithChat.lastname}`}
                        </Typography>

                        <Grid container xs={12} maxWidth={'100%'}>
                          <Grid item xs={8}>
                            <Typography
                              fontSize={'12px'}
                              fontWeight={600}
                              maxWidth="100%"
                              color="#000"
                              sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '100%',
                              }}
                            >
                              {e[1].message}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              width="100px"
                              maxWidth="100%"
                              fontSize={'12px'}
                              color={'#8C94A6'}
                            >
                              {getTimeDifference(e[1].createdAt)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Stack>
                    </Stack>
                  </>
                );
              })
            ) : (
              <Typography color={'secondary'} textAlign={'center'}>
                No tienes mensajes en tu chat
              </Typography>
            )}
          </>
        ) : (
          <div
            style={{
              width: '95%',
              maxHeight: '390px',
              overflowY: 'auto',
              overflowX: 'none',
            }}
          >
            {messagesList ? (
              messagesList
                .slice()
                .reverse()
                .map((e, index) => {
                  if (parseInt(e.emisorID) === parseInt(userId)) {
                    return (
                      <EmisorMessage
                        key={index}
                        date={e.createdAt}
                        message={e.message}
                      />
                    );
                  } else {
                    return (
                      <ReceptorMessage
                        key={index}
                        image={`${serverURL}/api/${chats[indexReceptor].personWithChat.profile_image}`}
                        date={e.createdAt}
                        message={e.message}
                      />
                    );
                  }
                })
            ) : (
              <Typography color="secondary">
                {' '}
                No se cargaron los mensajes
              </Typography>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <>
          {chatear && (
            <Stack
              direction="column"
              position="absolute"
              bottom={0}
              left={0}
              width="100vw"
              pb={2}
              px={2}
            >
              {/* ---------------Cuando el Otro usuario esta escribiendo ---------------*/}
              {/* <Grid container p={2}>

                            <Grid item xs={2}>
                                <Avatar alignSelf="flex-end"></Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack direction="column" alignItems={"flex-start"} >
                                    <Typography fontSize="16px" color="#000" >José Luis</Typography>
                                    <Stack direction="row" justifyContent={"space-around"} p="10px 15px 10px 15px" borderRadius="0px 10px 10px 10px" width="91px" height="35px" bgcolor={"#F1F7FF"}>
                                        <svg width="16" className="worm" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>
                                        <svg width="16" className="worm worm-delay2" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>
                                        <svg width="16" className="worm worm-delay3" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>

                                    </Stack>


                                </Stack>
                            </Grid>

                        </Grid> */}
              {/*Escribir */}
              <form onSubmit={enviarMensaje}>
                <Stack
                  direction="row"
                  justifyContent={'space-between'}
                >
                  <Stack direction="row" alignItems={'center'}>
                    {/* ----------------- EMOJI -------------------           */}
                    {/*<Stack direction="row" alignItems={"center"}>
                                <svg width="25" style={{ cursor: "pointer" }} height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.5 9H9.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.5 9H15.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>*/}
                    {/* ----------------- EMOJI -------------------           */}
                    <Input
                      placeholder="Responder"
                      style={{
                        marginLeft: '5px',
                        border: 'none',
                        color: '#0D082C',
                        fontSize: '16px',
                      }}
                      value={nuevoMensaje}
                      onChange={(e) =>
                        setNuevoMensaje(e.target.value)
                      }
                    />
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    {/* ---------------------------- IMAGEN ------------------------ */}
                    {/* <svg style={{ cursor: "pointer" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <svg opacity="0.4">
                                        <path d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.5 15.0002L18.414 11.9142C18.0389 11.5392 17.5303 11.3286 17 11.3286C16.4697 11.3286 15.9611 11.5392 15.586 11.9142L6.5 21.0002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </svg> */}
                    {/* ---------------------------- IMAGEN ------------------------ */}
                    <button type="submit" style={{ border: 'none' }}>
                      <Stack
                        ml={1}
                        direction="column"
                        justifyContent={'center'}
                        alignItems="center"
                        width="40px"
                        height="40px"
                        borderRadius="100px"
                        sx={{
                          background: Colors.primary.main,
                          cursor: 'pointer',
                        }}
                      >
                        <svg
                          style={{ cursor: 'pointer' }}
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.5 18L15.5 12L9.5 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Stack>
                    </button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          )}
        </>
      </Stack>
    </>
  );
};

export default PageChatMobile;
