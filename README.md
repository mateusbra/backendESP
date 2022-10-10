Uso da API endpoints:

/setLumin -> seta luminosidade, parametros: int luminosity

/getLumin -> pega luminosidade

/setMotion -> seta movimento, parametros: bool motion (0 = nao move,1 = move)

/getMotion -> pega movimento

/setMode -> seta modo, parametros: bool mode(0 = manual, 1 = automatico)

/getMode -> pega modo, parametros: bool mode

----------------------
exemplo GET:
https://backendesp-p2y5tlpbz-mateusbra.vercel.app/getMotion

retorna movimento

exemplo POST:
https://backendesp-p2y5tlpbz-mateusbra.vercel.app/setMotion?motion=true

seta movimento detectado
