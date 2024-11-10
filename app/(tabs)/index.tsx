import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import { Image  } from "react-native";
import tw from 'twrnc'

export default function Index() {
  return (
    <Container>
      <Image source={{uri: "../assets/images/logo.png"}} style={tw`h-10 w-24`} resizeMode="contain"/>
      <SearchBar />
    </Container>
  );
}
