// ElectroHub Product Data

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  isNew?: boolean
  isFeatured?: boolean
  specifications?: Record<string, string>
  compatibility?: string[]
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  productCount: number
}

export interface DIYKit {
  id: string
  name: string
  description: string
  price: number
  image: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  components: string[]
  projectTime: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export const categories: Category[] = [
  { id: 'arduino', name: 'Arduino', icon: 'Cpu', description: 'Arduino boards and shields', productCount: 45 },
  { id: 'raspberry-pi', name: 'Raspberry Pi', icon: 'Server', description: 'Raspberry Pi boards and accessories', productCount: 32 },
  { id: 'sensors', name: 'Sensors', icon: 'Radio', description: 'Temperature, motion, proximity sensors', productCount: 120 },
  { id: 'iot-modules', name: 'IoT Modules', icon: 'Wifi', description: 'WiFi, Bluetooth, LoRa modules', productCount: 65 },
  { id: 'motors-drivers', name: 'Motors & Drivers', icon: 'Settings', description: 'DC motors, servo motors, drivers', productCount: 78 },
  { id: 'batteries', name: 'Batteries', icon: 'Battery', description: 'Li-ion, LiPo, power banks', productCount: 40 },
  { id: 'robotics', name: 'Robotics', icon: 'Bot', description: 'Robot kits and parts', productCount: 55 },
  { id: 'diy-kits', name: 'DIY Kits', icon: 'Wrench', description: 'Complete project kits', productCount: 30 },
  { id: 'wires-connectors', name: 'Wires & Connectors', icon: 'Cable', description: 'Jumper wires, connectors, headers', productCount: 200 },
  { id: 'displays', name: 'Displays', icon: 'Monitor', description: 'LCD, OLED, LED displays', productCount: 45 },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Arduino Uno R3',
    description: 'The classic Arduino board, perfect for beginners and pros alike. Features ATmega328P microcontroller.',
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviews: 2345,
    image: '/images/arduino-uno.jpg',
    category: 'arduino',
    inStock: true,
    isFeatured: true,
    specifications: {
      'Microcontroller': 'ATmega328P',
      'Operating Voltage': '5V',
      'Digital I/O Pins': '14',
      'Analog Input Pins': '6',
      'Flash Memory': '32 KB',
    },
    compatibility: ['Arduino IDE', 'PlatformIO', 'All Arduino shields'],
  },
  {
    id: '2',
    name: 'Raspberry Pi 5 (8GB)',
    description: 'Latest Raspberry Pi with 8GB RAM, perfect for complex projects and edge computing.',
    price: 7499,
    rating: 4.9,
    reviews: 1876,
    image: '/images/raspberry-pi-5.jpg',
    category: 'raspberry-pi',
    inStock: true,
    isNew: true,
    isFeatured: true,
    specifications: {
      'Processor': 'Broadcom BCM2712',
      'RAM': '8GB LPDDR4X',
      'WiFi': '802.11ac',
      'Bluetooth': '5.0',
      'USB': '2x USB 3.0, 2x USB 2.0',
    },
  },
  {
    id: '3',
    name: 'ESP32 DevKit V1',
    description: 'WiFi and Bluetooth enabled microcontroller, ideal for IoT projects.',
    price: 449,
    originalPrice: 549,
    rating: 4.7,
    reviews: 3421,
    image: '/images/esp32.jpg',
    category: 'iot-modules',
    inStock: true,
    isFeatured: true,
    specifications: {
      'Processor': 'Dual-core Xtensa LX6',
      'WiFi': '802.11 b/g/n',
      'Bluetooth': '4.2 BR/EDR and BLE',
      'Flash': '4MB',
      'GPIO Pins': '36',
    },
  },
  {
    id: '4',
    name: 'DHT22 Temperature Sensor',
    description: 'High precision temperature and humidity sensor with digital output.',
    price: 199,
    rating: 4.5,
    reviews: 1543,
    image: '/images/dht22.jpg',
    category: 'sensors',
    inStock: true,
    specifications: {
      'Temperature Range': '-40 to 80°C',
      'Humidity Range': '0-100% RH',
      'Accuracy': '±0.5°C, ±2% RH',
      'Output': 'Digital',
    },
  },
  {
    id: '5',
    name: 'L298N Motor Driver',
    description: 'Dual H-bridge motor driver for DC and stepper motors.',
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviews: 2156,
    image: '/images/l298n.jpg',
    category: 'motors-drivers',
    inStock: true,
    specifications: {
      'Channels': '2',
      'Max Current': '2A per channel',
      'Voltage': '5-35V',
      'Logic Voltage': '5V',
    },
  },
  {
    id: '6',
    name: '0.96" OLED Display',
    description: 'High contrast OLED display module with I2C interface.',
    price: 249,
    rating: 4.7,
    reviews: 1876,
    image: '/images/oled-display.jpg',
    category: 'displays',
    inStock: true,
    specifications: {
      'Size': '0.96 inch',
      'Resolution': '128x64',
      'Interface': 'I2C',
      'Color': 'White/Blue',
    },
  },
  {
    id: '7',
    name: 'SG90 Micro Servo Motor',
    description: 'Lightweight micro servo motor, perfect for robotics projects.',
    price: 89,
    rating: 4.4,
    reviews: 3254,
    image: '/images/servo-motor.jpg',
    category: 'motors-drivers',
    inStock: true,
    specifications: {
      'Torque': '1.8 kg-cm',
      'Speed': '0.1s/60°',
      'Voltage': '4.8-6V',
      'Weight': '9g',
    },
  },
  {
    id: '8',
    name: '18650 Li-ion Battery (3.7V 2600mAh)',
    description: 'High capacity rechargeable lithium-ion battery cell.',
    price: 199,
    rating: 4.6,
    reviews: 1432,
    image: '/images/battery-18650.jpg',
    category: 'batteries',
    inStock: true,
    specifications: {
      'Capacity': '2600mAh',
      'Voltage': '3.7V',
      'Type': 'Li-ion',
      'Cycles': '500+',
    },
  },
  {
    id: '9',
    name: 'HC-SR04 Ultrasonic Sensor',
    description: 'Ultrasonic distance measuring sensor for obstacle detection.',
    price: 69,
    rating: 4.5,
    reviews: 4521,
    image: '/images/ultrasonic.jpg',
    category: 'sensors',
    inStock: true,
    specifications: {
      'Range': '2cm - 400cm',
      'Accuracy': '3mm',
      'Frequency': '40kHz',
      'Trigger': '10µs pulse',
    },
  },
  {
    id: '10',
    name: 'Relay Module 4 Channel',
    description: '4-channel relay module for switching high power loads.',
    price: 179,
    rating: 4.6,
    reviews: 2187,
    image: '/images/relay-module.jpg',
    category: 'iot-modules',
    inStock: true,
    specifications: {
      'Channels': '4',
      'Max Load': '10A 250VAC / 10A 30VDC',
      'Trigger': 'Active Low',
      'Isolation': 'Optocoupler',
    },
  },
  {
    id: '11',
    name: 'Jumper Wires Kit (120pcs)',
    description: 'Male-Male, Male-Female, Female-Female jumper wires combo.',
    price: 149,
    rating: 4.7,
    reviews: 5432,
    image: '/images/jumper-wires.jpg',
    category: 'wires-connectors',
    inStock: true,
  },
  {
    id: '12',
    name: 'Breadboard 830 Points',
    description: 'Solderless breadboard with 830 tie points for prototyping.',
    price: 99,
    rating: 4.8,
    reviews: 6543,
    image: '/images/breadboard.jpg',
    category: 'wires-connectors',
    inStock: true,
  },
]

export const diyKits: DIYKit[] = [
  {
    id: 'kit-1',
    name: 'Smart Irrigation Kit',
    description: 'Build an automated plant watering system with soil moisture sensing and smartphone control.',
    price: 1499,
    image: '/images/kit-irrigation.jpg',
    difficulty: 'Beginner',
    components: ['Arduino Nano', 'Soil Moisture Sensor', 'Water Pump', 'Relay Module', 'Tubing'],
    projectTime: '2-3 hours',
  },
  {
    id: 'kit-2',
    name: 'Bluetooth Robot Kit',
    description: 'Create a smartphone-controlled robot car with obstacle avoidance capabilities.',
    price: 2499,
    image: '/images/kit-robot.jpg',
    difficulty: 'Intermediate',
    components: ['Arduino Uno', 'Motor Driver', 'HC-05 Bluetooth', 'Chassis', 'Motors', 'Wheels'],
    projectTime: '4-5 hours',
  },
  {
    id: 'kit-3',
    name: 'Home Automation Kit',
    description: 'Control your home appliances via WiFi with voice assistant integration.',
    price: 1999,
    image: '/images/kit-home.jpg',
    difficulty: 'Intermediate',
    components: ['ESP32', 'Relay Module', 'Power Supply', 'Junction Box', 'Connectors'],
    projectTime: '3-4 hours',
  },
  {
    id: 'kit-4',
    name: 'IoT Starter Kit',
    description: 'Learn IoT fundamentals with sensors, actuators, and cloud connectivity.',
    price: 2999,
    image: '/images/kit-iot.jpg',
    difficulty: 'Beginner',
    components: ['ESP8266', 'DHT11', 'LDR', 'LED', 'Buzzer', 'OLED Display'],
    projectTime: '2-3 hours',
  },
  {
    id: 'kit-5',
    name: 'Line Follower Robot Kit',
    description: 'Build a robot that follows a black line path autonomously.',
    price: 1299,
    image: '/images/kit-line-follower.jpg',
    difficulty: 'Beginner',
    components: ['Arduino Nano', 'IR Sensors', 'Motor Driver', 'Chassis', 'Motors'],
    projectTime: '2-3 hours',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Engineering Student, IIT Delhi',
    content: 'ElectroHub has been a game-changer for my college projects. Fast delivery and genuine components at student-friendly prices!',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Robotics Enthusiast',
    content: 'The DIY kits are amazing! Everything you need in one box with clear instructions. Perfect for weekend projects.',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'IoT Developer',
    content: 'Best place for IoT components. The smart recommendation feature helped me find all the parts I needed for my home automation project.',
    avatar: '/images/avatar-3.jpg',
    rating: 4,
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    role: 'Maker & YouTuber',
    content: 'I source all my project components from ElectroHub. Great quality, competitive prices, and the student discounts are a bonus!',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
  },
]

export const smartRecommendations = {
  'home-automation': {
    title: 'Home Automation Project',
    products: ['ESP32 DevKit V1', 'Relay Module 4 Channel', 'Jumper Wires Kit', 'Breadboard 830 Points', 'DHT22 Temperature Sensor'],
    description: 'Everything you need to automate your home appliances',
  },
  'robot-car': {
    title: 'Robot Car Project',
    products: ['Arduino Uno R3', 'L298N Motor Driver', 'HC-SR04 Ultrasonic Sensor', 'SG90 Micro Servo Motor', '18650 Li-ion Battery'],
    description: 'Build your own obstacle-avoiding robot car',
  },
  'weather-station': {
    title: 'Weather Station Project',
    products: ['ESP8266 NodeMCU', 'DHT22 Temperature Sensor', '0.96" OLED Display', 'BMP280 Pressure Sensor', 'Jumper Wires Kit'],
    description: 'Create a connected weather monitoring system',
  },
}
