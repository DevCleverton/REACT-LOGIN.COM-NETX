import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        
        <h3 href="http://github.com/devcleverton">DEV</h3>

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          placeholder="E-mail"
        />

        <Input
          placeholder="Senha"
          marginTop={2}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = response => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <div className="App">
      <h1>Login with Google</h1>
      {!loginStatus && (
        <GoogleLogin
          clientId="208739294372-0s28mtjnq92um8g6argnn894oa01ls8o.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <img src={url} alt={name} />
          <br />
          <GoogleLogout
            clientId="208739294372-0s28mtjnq92um8g6argnn894oa01ls8o.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
}

