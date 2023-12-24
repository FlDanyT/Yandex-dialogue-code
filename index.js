const reqDanya = "когда день рождения дани";
const reqMilan = "когда день рождения миланы";
const reqMother = "когда день рождения мамы";
const reqFather = "когда день рождения папы";

const sendDanya = "День рождения Дани шестнадцатого мая";
const sendMilan = "День рождения Миланы двадцать третьего декабря";
const sendMother = "День рождения Мамы двадцатого ноября";
const sendFather = "День рождения Папы седьмого октября";

module.exports.handler = async (event, context) => {
  const { version, session, request } = event;

  let text =
    "Привет! Я подскажу когда у тебя день рождения! Для этого скажи фразу: Когда день рождения и имя"; // Начальный текст
  let tts =
    "Привет! Я подскажу когда у тебя день рождения! Для этого скажи фразу: Когда день рождения и имя";

  // Если имя с большой буквы
  if (request["command"] === reqDanya) {
    text = sendDanya;
    tts = sendDanya;
  }
  if (request["command"] === reqMilan) {
    text = sendMilan;
    tts = sendMilan;
  }
  if (request["command"] === reqMother) {
    text = sendMother;
    tts = sendMother;
  }
  if (request["command"] === reqFather) {
    text = sendFather;
    tts = sendFather;
  }

  return {
    // Отправка на сервер
    version,
    session,
    response: {
      text: text,
      tts: tts,
      end_session: false, // ( если true диолог закончитаься, false продолжиться )
    },
  };
};
