Uso da API endpoints:

/setLumin -> seta luminosidade, parametros: int luminosity

/getLumin -> pega luminosidade

/setMotion -> seta movimento, parametros: bool motion (0 = nao move,1 = move)

/getMotion -> pega movimento

/setMode -> seta modo, parametros: bool mode(0 = manual, 1 = automatico)

/getMode -> pega modo, parametros: bool mode

/setRgb -> seta rgb, parametros: string rgb(6 digitos sem #)

/getRgb -> pega rgb, 6 digitos sem #

----------------------
exemplo GET:
https://backendesp.vercel.app/getMotion

retorna movimento

exemplo POST:
https://backendesp.vercel.app/setMotion?motion=true

seta movimento detectado
