import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [isNumber, setNumber] = useState(true);
  const [isUpperCase, setUpperCase] = useState(true);
  const [isLowerCase, setLowerCase] = useState(true);
  const [isSymbols, setSymbols] = useState(true);

  const generatePassword = () => {
    let chars = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (isUpperCase) chars += upperCaseChars;
    if (isLowerCase) chars += lowerCaseChars;
    if (isNumber) chars += numberChars;
    if (isSymbols) chars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < 8; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [isNumber, isUpperCase, isLowerCase, isSymbols]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Password Generator</Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? (
              <Icon name="person-circle" size={30} color="#fff" />
            ) : (
              <Text style={styles.loginText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Password Display */}
        <View style={styles.passwordContainer}>
          <Text style={styles.password} selectable={true}>{password}</Text>
          <TouchableOpacity onPress={generatePassword}>
            <Icon name="refresh" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Password Options */}
        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Numbers</Text>
            <BouncyCheckbox
              useNativeDriver={true}
              isChecked={isNumber}
              onPress={() => setNumber(!isNumber)}
              fillColor="#4A90E2"
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Uppercase</Text>
            <BouncyCheckbox
              useNativeDriver={true}
              isChecked={isUpperCase}
              onPress={() => setUpperCase(!isUpperCase)}
              fillColor="#4A90E2"
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Lowercase</Text>
            <BouncyCheckbox
              useNativeDriver={true}
              isChecked={isLowerCase}
              onPress={() => setLowerCase(!isLowerCase)}
              fillColor="#4A90E2"
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Symbols</Text>
            <BouncyCheckbox
              useNativeDriver={true}
              isChecked={isSymbols}
              onPress={() => setSymbols(!isSymbols)}
              fillColor="#4A90E2"
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 20,
    minWidth: 80,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  passwordContainer: {
    backgroundColor: '#2A2A2A',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  password: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'monospace',
  },
  optionsContainer: {
    padding: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});