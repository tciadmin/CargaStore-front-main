import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { Colors } from '../../Utils/Colors';
import {
  Avatar,
  Box,
  Grid,
  Input,
  Stack,
  Typography,
} from '@mui/material';
import {
  createMessage,
  getAllChats,
  getAllMessages,
} from '../../Redux/Actions/ChatActions/chatActions';
import getTimeDifference from '../../helpers/diferenciaHoraria';
import EmisorMessage from './EmisorMessage';
import ReceptorMessage from './ReceptorMessage';
import ReceptorWriting from './ReceptorWriting';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Chat = ({ cerrarChat }) => {
  const [arrayChat, setArrayChat] = useState([]);
  const [chatear, setChatear] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [indexReceptor, setIndexReceptor] = useState(null);
  // const [socket, setSocket] = useState(null);

  const { messagesList, chats } = useSelector((state) => state.chats);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom(); // Llama a esta función cuando se monte el componente
  }, [messagesList]);

  const userId = user.id;

  useEffect(() => {
    if (location.pathname !== '/landing' && userId) {
      dispatch(getAllChats(userId));
    }
    if (location.pathname === '/landing'){
      cerrarChat()
    }
  }, [dispatch, userId, location.pathname]);

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
      setNuevoMensaje('');
    }
  };

  const serverURL = import.meta.env.VITE_URL_BACKEND;

  return (
    <>
      {user ? (
        <Box
          style={{
            transition: 'all 0.3s ease',
          }}
          position="fixed"
          bottom={0}
          right={0}
          width="400px"
          height={'580px'}
          sx={{
            background: '#fff',
            boxShadow: ' 45px 9px 34px 0px #0000001A',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <Stack
            direction="row"
            borderRadius={'10px 10px 0px 0px'}
            justifyContent="space-between"
            bgcolor={Colors.terciary.contrastText}
            alignItems={'center'}
            p={2}
          >
            <Stack direction="row" alignItems={'center'}>
              {chatear && (
                <Avatar
                  width="40px"
                  src={`${serverURL}/${chats[indexReceptor].personWithChat.profile_image}`}
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
            <svg
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setChatear(false);
                cerrarChat();
              }}
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                width="40"
                height="40"
                rx="20"
                fill="#DDF4EC"
              />
              <path
                d="M26.5 14L14.5 26"
                stroke="#007C52"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 14L26.5 26"
                stroke="#007C52"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>

          <Stack direction="column">
            {!chatear ? 
            (
              <>
                {chats ? (
                  arrayChat.map((e, index) => {
                    return (
                      <>
                        <Stack
                          key={index}
                          direction={'row'}
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
                            src={`${serverURL}/${e[1].personWithChat.profile_image}`}
                            height="40px"
                          />
                          <Stack direction="column" ml={0.5}>
                            <Typography
                              fontSize={'12px'}
                              color="#000"
                            >
                              {`${e[1].personWithChat.name} ${e[1].personWithChat.lastname}`}
                            </Typography>

                            <Grid
                              container
                              xs={12}
                              minWidth={'300px'}
                            >
                              <Grid item xs={6}>
                                <Typography
                                  fontSize={'12px'}
                                  fontWeight={600}
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
                              <Grid style={{marginLeft: '5px'}} item xs={4}>
                                <Typography
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
                  <Typography
                    color={'secondary'}
                    textAlign={'center'}
                  >
                    No tienes mensajes en tu chat
                  </Typography>
                )}
              </>
            ) : (
              <>
                <Box
                  sx={{
                    height: '390px',
                    width: '95%',
                    overflowY: 'auto',
                    overflowX: 'none',
                    scrollbarWidth: 'thin', // Para Firefox
                    '&::-webkit-scrollbar': {
                      width: '1px', // Grosor de la scrollbar vertical
                      height: '1px', // Grosor de la scrollbar horizontal (si la hay)
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Color de la barra de desplazamiento (opcional)
                      borderRadius: '10px', // Redondeo (opcional)
                    },
                    '&::-webkit-scrollbar-button': {
                      display: 'none', // Eliminar las flechas
                    },
                  }}
                >
                  {messagesList ? (
                    messagesList
                      .slice()
                      .reverse()
                      .map((e, index) => {
                        if (
                          parseInt(e.emisorID) == parseInt(userId)
                        ) {
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
                              image={`${serverURL}/${chats[indexReceptor].personWithChat.profile_image}`}
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
                </Box >

                <Stack
                  direction="column"
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="400px"
                  pb={2}
                  px={2}
                >
                  {/*---------------------Cuando el receptor está escribiendo */}

                  {/* <ReceptorWriting
                    nameOfUser={
                      chats[indexReceptor].personWithChat.name +
                      '  ' +
                      chats[indexReceptor].personWithChat.lastname
                    }
                  />*/}
                  {/*Aqui escribe el emisor */}
                  <form onSubmit={enviarMensaje}>
                    <Stack
                      direction="row"
                      justifyContent={'space-between'}
                    >
                      <Stack direction="row" alignItems={'center'}>
                        {/* --------------------- EMOJI -------------------------          */}
                        {/* <svg
                          width="25"
                          style={{ cursor: 'pointer' }}
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.5 9H9.51"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.5 9H15.51"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg> */}
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

                        {/* <svg
                          style={{ cursor: 'pointer' }}
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <svg opacity="0.4">
                            <path
                              d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21.5 15.0002L18.414 11.9142C18.0389 11.5392 17.5303 11.3286 17 11.3286C16.4697 11.3286 15.9611 11.5392 15.586 11.9142L6.5 21.0002"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </svg> */}
                        {/* -------------------------- IMAGEN ---------------------------                 */}
                        <button
                          type="submit"
                          style={{ border: 'none' }}
                        >
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
                            // onClick={() => enviarMensaje()}
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
              </>
            )}
          </Stack>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default Chat;
