const formatSkill = (skill: string) => {
    let color: string;

    switch (skill) {
      case 'Haki': 
        color = 'red';
        break; 
      case 'Santôryû': 
        color = 'blue'; 
        break; 
      case 'Gyojin Karate': 
        color = 'green'; 
        break; 
      case 'Tireur d\'élite': 
        color = 'teal'; 
        break; 
      case 'Cuisinier': 
        color = 'yellow'; 
        break; 
      case 'Ninjutsu': 
        color = 'blackAlpha'; 
        break; 
      case 'Docteur': 
        color = 'cyan'; 
        break; 
      case 'Zoan': 
        color = 'twitter'; 
        break; 
      case 'Paramecia': 
        color = 'linkedin'; 
        break; 
      case 'Archéologue': 
        color = 'whatsapp'; 
        break; 
      default: 
        color = 'gray'; 
        break; 
    }

  return color;
  }

  export default formatSkill;