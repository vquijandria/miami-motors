import { useState, useRef, FormEvent } from 'react'; // Importa React también
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormAutos.css';

const FormAutos = () => {
    {
        const [name, setName] = useState('');
        const [number, setNumber] = useState('');
        const [year, setYear] = useState('');
        const [brand, setBrand] = useState('');
        const [model, setModel] = useState('');
        const [part, setPart] = useState('');
        
        
      
        const yearOptions = [
          { value: 'null', label: ' ' },
          { value: '2025', label: '2025' },
          { value: '2024', label: '2024' },
          { value: '2023', label: '2023' },
          { value: '2022', label: '2022' },
          { value: '2021', label: '2021' },
          { value: '2020', label: '2020' },
          { value: '2019', label: '2019' },
          { value: '2018', label: '2018' },
          { value: '2017', label: '2017' },
          { value: '2016', label: '2016' },
          { value: '2015', label: '2015' },
          { value: '2014', label: '2014' },
          { value: '2013', label: '2013' },
          { value: '2012', label: '2012' },
          { value: '2011', label: '2011' },
          { value: '2010', label: '2010' },
          { value: '2009', label: '2009' },
          { value: '2008', label: '2008' },
          { value: '2007', label: '2007' },
          { value: '2006', label: '2006' },
          { value: '2005', label: '2005' },
          { value: '2004', label: '2004' },
          { value: '2003', label: '2003' },
          { value: '2002', label: '2002' },
          { value: '2001', label: '2001' },
          { value: '2000', label: '2000' },
          // Agrega más años si es necesario
        ];

        const carPartsOptions = [
          { value: 'null', label: ' ' },
          { value: 'aceite-motor', label: 'Aceite de Motor' },
          { value: 'amortiguadores', label: 'Amortiguadores' },
          { value: 'bateria', label: 'Batería' },
          { value: 'bombilla-faros', label: 'Bombilla de Faros' },
          { value: 'bujias', label: 'Bujías' },
          { value: 'correa-distribucion', label: 'Correa de Distribución' },
          { value: 'embrague', label: 'Embrague' },
          { value: 'escobillas-limpiaparabrisas', label: 'Escobillas Limpiaparabrisas' },
          { value: 'filtro-aceite', label: 'Filtro de Aceite' },
          { value: 'filtro-aire', label: 'Filtro de Aire' },
          { value: 'filtro-combustible', label: 'Filtro de Combustible' },
          { value: 'filtro-habitaculo', label: 'Filtro de Habitáculo' },
          { value: 'fluidos-frenos', label: 'Fluidos de Frenos' },
          { value: 'pastillas-frenos', label: 'Pastillas de Frenos' },
          { value: 'radiador', label: 'Radiador' },
          { value: 'rotulas', label: 'Rótulas' },
          { value: 'sensor-oxigeno', label: 'Sensor de Oxígeno' },
          { value: 'termostato', label: 'Termostato' },
          { value: 'transmision-automatica', label: 'Transmisión Automática' },
          { value: 'transmision-manual', label: 'Transmisión Manual' },
          { value: 'volante-motor', label: 'Volante del Motor' },
        ]

        
      
        const brandOptions = [
          { value: 'null', label: ' ' },
          { value: 'alfaromeo', label: 'Alfa Romeo' },
          { value: 'audi', label: 'Audi' },
          { value: 'bmw', label: 'BMW' },
          { value: 'chevrolet', label: 'Chevrolet' },
          { value: 'dodge', label: 'Dodge' },
          { value: 'ford', label: 'Ford' },
          { value: 'honda', label: 'Honda' },
          { value: 'hyundai', label: 'Hyundai' },
          { value: 'jeep', label: 'Jeep' },
          { value: 'landrover', label: 'Land Rover' },
          { value: 'maserati', label: 'Maserati' },
          { value: 'mazda', label: 'Mazda' },
          { value: 'mercedes-benz', label: 'Mercedes Benz' },
          { value: 'nissan', label: 'Nissan' },
          { value: 'porsche', label: 'Porsche' },
          { value: 'subaru', label: 'Subaru' },
          { value: 'toyota', label: 'Toyota' },
          { value: 'volkswagen', label: 'Volkswagen' },
          { value: 'volvo', label: 'Volvo' },
          
        ];
      
        const modelOptions = [
          //Modelos Alfa Romeo
          { value: '4c', label: '4C', brand: 'alfaromeo' },
          { value: '6c', label: '6C', brand: 'alfaromeo' },
          { value: '8c', label: '8C', brand: 'alfaromeo' },
          { value: '8c-competizione', label: '8C Competizione', brand: 'alfaromeo' },
          { value: '12c', label: '12C', brand: 'alfaromeo' },
          { value: '24-hp', label: 'A.L.F.A 24 HP', brand: 'alfaromeo' },
          { value: '33', label: '33', brand: 'alfaromeo' },
          { value: '33-stradale', label: '33 Stradale', brand: 'alfaromeo' },
          { value: '40-60-hp', label: 'ALFA 40/60 HP', brand: 'alfaromeo' },
          { value: '75', label: '75', brand: 'alfaromeo' },
          { value: '90', label: '90', brand: 'alfaromeo' },
          { value: '145', label: '145', brand: 'alfaromeo' },
          { value: '147', label: '147', brand: 'alfaromeo' },
          { value: '155', label: '155', brand: 'alfaromeo' },
          { value: '156', label: '156', brand: 'alfaromeo' },
          { value: '159', label: '159', brand: 'alfaromeo' },
          { value: '164', label: '164', brand: 'alfaromeo' },
          { value: '166', label: '166', brand: 'alfaromeo' },
          { value: '1750', label: '1750', brand: 'alfaromeo' },
          { value: '2000', label: '2000', brand: 'alfaromeo' },
          { value: '2300', label: '2300', brand: 'alfaromeo' },
          { value: '2600', label: '2600', brand: 'alfaromeo' },
          { value: '177', label: '177', brand: 'alfaromeo' },
          { value: '1900', label: '1900', brand: 'alfaromeo' },
          { value: 'alfa-6', label: 'Alfa 6', brand: 'alfaromeo' },
          { value: 'alfasud', label: 'Alfasud', brand: 'alfaromeo' },
          { value: 'alfetta', label: 'Alfetta', brand: 'alfaromeo' },
          { value: 'alfetta-gt-gtv', label: 'Alfetta GT/GTV', brand: 'alfaromeo' },
          { value: 'arna', label: 'Arna', brand: 'alfaromeo' },
          { value: 'brera', label: 'Brera', brand: 'alfaromeo' },
          { value: 'dauphine', label: 'Dauphine', brand: 'alfaromeo' },
          { value: 'giulia-1962', label: 'Giulia (1962)', brand: 'alfaromeo' },
          { value: 'giulia-2015', label: 'Giulia (2015)', brand: 'alfaromeo' },
          { value: 'giulia-gt-veloce', label: 'Giulia GT Veloce', brand: 'alfaromeo' },
          { value: 'giulia-tz', label: 'Giulia TZ', brand: 'alfaromeo' },
          { value: 'giulietta-1977', label: 'Giulietta (1977)', brand: 'alfaromeo' },
          { value: 'giulietta-1955', label: 'Giulietta (1955)', brand: 'alfaromeo' },
          { value: 'giulietta-2010', label: 'Giulietta (2010)', brand: 'alfaromeo' },
          { value: 'gt', label: 'GT', brand: 'alfaromeo' },
          { value: 'gtv', label: 'GTV', brand: 'alfaromeo' },
          { value: 'montreal', label: 'Montreal', brand: 'alfaromeo' },
          { value: 'mito', label: 'MiTo', brand: 'alfaromeo' },
          { value: 'p1', label: 'P1', brand: 'alfaromeo' },
          { value: 'p2', label: 'P2', brand: 'alfaromeo' },
          { value: 'p3', label: 'P3', brand: 'alfaromeo' },
          { value: 'rl', label: 'RL', brand: 'alfaromeo' },
          { value: 'rm', label: 'RM', brand: 'alfaromeo' },
          { value: 'romeo', label: 'Romeo', brand: 'alfaromeo' },
          { value: 'spider-1966', label: 'Spider (1966)', brand: 'alfaromeo' },
          { value: 'sprint', label: 'Sprint', brand: 'alfaromeo' },
          { value: 'stelvio', label: 'Stelvio', brand: 'alfaromeo' },
          { value: 'sz-rz', label: 'SZ/RZ', brand: 'alfaromeo' },
          { value: 'tipo-a', label: 'Tipo A', brand: 'alfaromeo' },
          { value: 'tonale', label: 'Tonale', brand: 'alfaromeo' },

          //Modelos Audi
          { value: 'a1', label: 'A1', brand: 'audi' },
          { value: 'a2', label: 'A2', brand: 'audi' },
          { value: 'a3', label: 'A3', brand: 'audi' },
          { value: 'a4', label: 'A4', brand: 'audi' },
          { value: 'a5', label: 'A5', brand: 'audi' },
          { value: 'a6', label: 'A6', brand: 'audi' },
          { value: 'a7', label: 'A7', brand: 'audi' },
          { value: 'a8', label: 'A8', brand: 'audi' },
          { value: 'allroad', label: 'Allroad', brand: 'audi' },
          { value: 'coupe', label: 'Coupe', brand: 'audi' },
          { value: 'q2', label: 'Q2', brand: 'audi' },
          { value: 'q3', label: 'Q3', brand: 'audi' },
          { value: 'q4', label: 'Q4', brand: 'audi' },
          { value: 'q5', label: 'Q5', brand: 'audi' },
          { value: 'q7', label: 'Q7', brand: 'audi' },
          { value: 'q8', label: 'Q8', brand: 'audi' },
          { value: 'quattro', label: 'Quattro', brand: 'audi' },
          { value: 'r8', label: 'R8', brand: 'audi' },
          { value: 'rs3', label: 'RS3', brand: 'audi' },
          { value: 'rs4', label: 'RS4', brand: 'audi' },
          { value: 'rs5', label: 'RS5', brand: 'audi' },
          { value: 'rs6', label: 'RS6', brand: 'audi' },
          { value: 'rs7', label: 'RS7', brand: 'audi' },
          { value: 's1', label: 'S1', brand: 'audi' },
          { value: 's3', label: 'S3', brand: 'audi' },
          { value: 's4', label: 'S4', brand: 'audi' },
          { value: 's5', label: 'S5', brand: 'audi' },
          { value: 's6', label: 'S6', brand: 'audi' },
          { value: 's7', label: 'S7', brand: 'audi' },
          { value: 's8', label: 'S8', brand: 'audi' },
          { value: 'sport-quattro', label: 'Sport Quattro', brand: 'audi' },
          { value: 'sq2', label: 'SQ2', brand: 'audi' },
          { value: 'sq3', label: 'SQ3', brand: 'audi' },
          { value: 'sq5', label: 'SQ5', brand: 'audi' },
          { value: 'sq7', label: 'SQ7', brand: 'audi' },
          { value: 'sq8', label: 'SQ8', brand: 'audi' },
          { value: 'tt', label: 'TT', brand: 'audi' },
          { value: 'v8', label: 'V8', brand: 'audi' },

          //Modelos BMW
          { value: '1-series', label: 'Serie 1', brand: 'bmw' },
          { value: '2-series', label: 'Serie 2', brand: 'bmw' },
          { value: '3-series', label: 'Serie 3', brand: 'bmw' },
          { value: '4-series', label: 'Serie 4', brand: 'bmw' },
          { value: '5-series', label: 'Serie 5', brand: 'bmw' },
          { value: '6-series', label: 'Serie 6', brand: 'bmw' },
          { value: '7-series', label: 'Serie 7', brand: 'bmw' },
          { value: '8-series', label: 'Serie 8', brand: 'bmw' },
          { value: 'm1', label: 'M1', brand: 'bmw' },
          { value: 'm2', label: 'M2', brand: 'bmw' },
          { value: 'm3', label: 'M3', brand: 'bmw' },
          { value: 'm4', label: 'M4', brand: 'bmw' },
          { value: 'm5', label: 'M5', brand: 'bmw' },
          { value: 'm6', label: 'M6', brand: 'bmw' },
          { value: 'x1', label: 'X1', brand: 'bmw' },
          { value: 'x2', label: 'X2', brand: 'bmw' },
          { value: 'x3', label: 'X3', brand: 'bmw' },
          { value: 'x4', label: 'X4', brand: 'bmw' },
          { value: 'x5', label: 'X5', brand: 'bmw' },
          { value: 'x6', label: 'X6', brand: 'bmw' },
          { value: 'x7', label: 'X7', brand: 'bmw' },
          { value: 'z1', label: 'Z1', brand: 'bmw' },
          { value: 'z3', label: 'Z3', brand: 'bmw' },
          { value: 'z4', label: 'Z4', brand: 'bmw' },
          { value: 'z8', label: 'Z8', brand: 'bmw' },

          //Modelos Dodge
          { value: 'avenger', label: 'Avenger', brand: 'dodge' },
          { value: 'caliber', label: 'Caliber', brand: 'dodge' },
          { value: 'caravan', label: 'Caravan', brand: 'dodge' },
          { value: 'charger', label: 'Charger', brand: 'dodge' },
          { value: 'challenger', label: 'Challenger', brand: 'dodge' },
          { value: 'dart', label: 'Dart', brand: 'dodge' },
          { value: 'durango', label: 'Durango', brand: 'dodge' },
          { value: 'grand-caravan', label: 'Grand Caravan', brand: 'dodge' },
          { value: 'journey', label: 'Journey', brand: 'dodge' },
          { value: 'magnum', label: 'Magnum', brand: 'dodge' },
          { value: 'neon', label: 'Neon', brand: 'dodge' },
          { value: 'nitro', label: 'Nitro', brand: 'dodge' },
          { value: 'ram', label: 'Ram', brand: 'dodge' },
          { value: 'stratus', label: 'Stratus', brand: 'dodge' },
          
          //Chevrolet
          { value: 'avalanche', label: 'Avalanche', brand: 'chevrolet' },
          { value: 'aveo', label: 'Aveo', brand: 'chevrolet' },
          { value: 'blazer', label: 'Blazer', brand: 'chevrolet' },
          { value: 'camaro', label: 'Camaro', brand: 'chevrolet' },
          { value: 'cobalt', label: 'Cobalt', brand: 'chevrolet' },
          { value: 'corvette', label: 'Corvette', brand: 'chevrolet' },
          { value: 'cruze', label: 'Cruze', brand: 'chevrolet' },
          { value: 'equinox', label: 'Equinox', brand: 'chevrolet' },
          { value: 'express', label: 'Express', brand: 'chevrolet' },
          { value: 'impala', label: 'Impala', brand: 'chevrolet' },
          { value: 'malibu', label: 'Malibu', brand: 'chevrolet' },
          { value: 'silverado', label: 'Silverado', brand: 'chevrolet' },
          { value: 'sonic', label: 'Sonic', brand: 'chevrolet' },
          { value: 'spark', label: 'Spark', brand: 'chevrolet' },
          { value: 'suburban', label: 'Suburban', brand: 'chevrolet' },
          { value: 'tahoe', label: 'Tahoe', brand: 'chevrolet' },
          { value: 'trailblazer', label: 'Trailblazer', brand: 'chevrolet' },
          { value: 'traverse', label: 'Traverse', brand: 'chevrolet' },
          { value: 'trax', label: 'Trax', brand: 'chevrolet' },
          { value: 'volt', label: 'Volt', brand: 'chevrolet' },
          
          //Ford
          { value: 'crown-victoria', label: 'Crown Victoria', brand: 'ford' },
          { value: 'e-series', label: 'E-Series', brand: 'ford' },
          { value: 'edge', label: 'Edge', brand: 'ford' },
          { value: 'escape', label: 'Escape', brand: 'ford' },
          { value: 'expedition', label: 'Expedition', brand: 'ford' },
          { value: 'explorer', label: 'Explorer', brand: 'ford' },
          { value: 'f-150', label: 'F-150', brand: 'ford' },
          { value: 'f-250', label: 'F-250', brand: 'ford' },
          { value: 'f-350', label: 'F-350', brand: 'ford' },
          { value: 'fiesta', label: 'Fiesta', brand: 'ford' },
          { value: 'flex', label: 'Flex', brand: 'ford' },
          { value: 'focus', label: 'Focus', brand: 'ford' },
          { value: 'fusion', label: 'Fusion', brand: 'ford' },
          { value: 'mustang', label: 'Mustang', brand: 'ford' },
          { value: 'ranger', label: 'Ranger', brand: 'ford' },
          { value: 'taurus', label: 'Taurus', brand: 'ford' },
          { value: 'transit', label: 'Transit', brand: 'ford' },
          { value: 'transit-connect', label: 'Transit Connect', brand: 'ford' },

          //Honda
          { value: 'accord', label: 'Accord', brand: 'honda' },
          { value: 'civic', label: 'Civic', brand: 'honda' },
          { value: 'cr-v', label: 'CR-V', brand: 'honda' },
          { value: 'fit', label: 'Fit', brand: 'honda' },
          { value: 'hr-v', label: 'HR-V', brand: 'honda' },
          { value: 'insight', label: 'Insight', brand: 'honda' },
          { value: 'odyssey', label: 'Odyssey', brand: 'honda' },
          { value: 'passport', label: 'Passport', brand: 'honda' },
          { value: 'pilot', label: 'Pilot', brand: 'honda' },
          { value: 'ridgeline', label: 'Ridgeline', brand: 'honda' },

          //Hyundai
          { value: 'accent', label: 'Accent', brand: 'hyundai' },
          { value: 'azera', label: 'Azera', brand: 'hyundai' },
          { value: 'elantra', label: 'Elantra', brand: 'hyundai' },
          { value: 'equus', label: 'Equus', brand: 'hyundai' },
          { value: 'genesis', label: 'Genesis', brand: 'hyundai' },
          { value: 'ioniq', label: 'Ioniq', brand: 'hyundai' },
          { value: 'kona', label: 'Kona', brand: 'hyundai' },
          { value: 'palisade', label: 'Palisade', brand: 'hyundai' },
          { value: 'santa-fe', label: 'Santa Fe', brand: 'hyundai' },
          { value: 'sonata', label: 'Sonata', brand: 'hyundai' },
          { value: 'tucson', label: 'Tucson', brand: 'hyundai' },
          { value: 'veloster', label: 'Veloster', brand: 'hyundai' },
          { value: 'venue', label: 'Venue', brand: 'hyundai' },

          //Jeep
          { value: 'cherokee', label: 'Cherokee', brand: 'jeep' },
          { value: 'compass', label: 'Compass', brand: 'jeep' },
          { value: 'grand-cherokee', label: 'Grand Cherokee', brand: 'jeep' },
          { value: 'renegade', label: 'Renegade', brand: 'jeep' },
          { value: 'wrangler', label: 'Wrangler', brand: 'jeep' },
          { value: 'gladiator', label: 'Gladiator', brand: 'jeep' },

          //Land Rover
          { value: 'defender', label: 'Defender', brand: 'land-rover' },
          { value: 'discovery', label: 'Discovery', brand: 'land-rover' },
          { value: 'discovery-sport', label: 'Discovery Sport', brand: 'land-rover' },
          { value: 'freelander', label: 'Freelander', brand: 'land-rover' },
          { value: 'range-rover', label: 'Range Rover', brand: 'land-rover' },
          { value: 'range-rover-evoque', label: 'Range Rover Evoque', brand: 'land-rover' },
          { value: 'range-rover-sport', label: 'Range Rover Sport', brand: 'land-rover' },

          //Maserati
          { value: 'ghibli', label: 'Ghibli', brand: 'maserati' },
          { value: 'quattroporte', label: 'Quattroporte', brand: 'maserati' },
          { value: 'granturismo', label: 'GranTurismo', brand: 'maserati' },
          { value: 'levante', label: 'Levante', brand: 'maserati' },

          //Mazda
          { value: '2', label: 'Mazda2', brand: 'mazda' },
          { value: '3', label: 'Mazda3', brand: 'mazda' },
          { value: '5', label: 'Mazda5', brand: 'mazda' },
          { value: '6', label: 'Mazda6', brand: 'mazda' },
          { value: 'bt-50', label: 'BT-50', brand: 'mazda' }, 
          { value: 'cx-3', label: 'CX-3', brand: 'mazda' },
          { value: 'cx-30', label: 'CX-30', brand: 'mazda' },
          { value: 'cx-5', label: 'CX-5', brand: 'mazda' },
          { value: 'cx-7', label: 'CX-7', brand: 'mazda' },
          { value: 'cx-9', label: 'CX-9', brand: 'mazda' },
          { value: 'mx-5', label: 'MX-5', brand: 'mazda' },

          //Mercedez Benz
          { value: 'a-class', label: 'Clase A', brand: 'mercedes-benz' },
          { value: 'b-class', label: 'Clase B', brand: 'mercedes-benz' },
          { value: 'c-class', label: 'Clase C', brand: 'mercedes-benz' },
          { value: 'e-class', label: 'Clase E', brand: 'mercedes-benz' },
          { value: 's-class', label: 'Clase S', brand: 'mercedes-benz' },
          { value: 'cls', label: 'CLS', brand: 'mercedes-benz' },
          { value: 'cla', label: 'CLA', brand: 'mercedes-benz' },
          { value: 'gla', label: 'GLA', brand: 'mercedes-benz' },
          { value: 'glb', label: 'GLB', brand: 'mercedes-benz' },
          { value: 'glc', label: 'GLC', brand: 'mercedes-benz' },
          { value: 'gle', label: 'GLE', brand: 'mercedes-benz' },
          { value: 'glk', label: 'GLK', brand: 'mercedes-benz' },
          { value: 'gls', label: 'GLS', brand: 'mercedes-benz' },
          { value: 'g-class', label: 'Clase G', brand: 'mercedes-benz' },
          { value: 'm-class', label: 'Clase M', brand: 'mercedes-benz' },
          { value: 'slk', label: 'SLK', brand: 'mercedes-benz' },
          { value: 'sl', label: 'SL', brand: 'mercedes-benz' },
          { value: 'amg-gt', label: 'AMG GT', brand: 'mercedes-benz' },

          //Nissan
          { value: 'altima', label: 'Altima', brand: 'nissan' },
          { value: 'armada', label: 'Armada', brand: 'nissan' },
          { value: 'cube', label: 'Cube', brand: 'nissan' },
          { value: 'frontier', label: 'Frontier', brand: 'nissan' },
          { value: 'kicks', label: 'Kicks', brand: 'nissan' },
          { value: 'leaf', label: 'Leaf', brand: 'nissan' },
          { value: 'maxima', label: 'Maxima', brand: 'nissan' },
          { value: 'murano', label: 'Murano', brand: 'nissan' },
          { value: 'pathfinder', label: 'Pathfinder', brand: 'nissan' },
          { value: 'rogue', label: 'Rogue', brand: 'nissan' },
          { value: 'sentra', label: 'Sentra', brand: 'nissan' },
          { value: 'titan', label: 'Titan', brand: 'nissan' },
          { value: 'versa', label: 'Versa', brand: 'nissan' },
          { value: 'xterra', label: 'Xterra', brand: 'nissan' },

          //Porsche
          { value: '911', label: '911', brand: 'porsche' },
          { value: 'boxster', label: 'Boxster', brand: 'porsche' },
          { value: 'cayenne', label: 'Cayenne', brand: 'porsche' },
          { value: 'cayman', label: 'Cayman', brand: 'porsche' },
          { value: 'macan', label: 'Macan', brand: 'porsche' },
          { value: 'panamera', label: 'Panamera', brand: 'porsche' },

          //Subaru
          { value: 'ascent', label: 'Ascent', brand: 'subaru' },
          { value: 'brz', label: 'BRZ', brand: 'subaru' },
          { value: 'crosstrek', label: 'Crosstrek', brand: 'subaru' },
          { value: 'forester', label: 'Forester', brand: 'subaru' },
          { value: 'impreza', label: 'Impreza', brand: 'subaru' },
          { value: 'legacy', label: 'Legacy', brand: 'subaru' },
          { value: 'outback', label: 'Outback', brand: 'subaru' },
          { value: 'wrx', label: 'WRX', brand: 'subaru' },
          { value: 'xv', label: 'XV', brand: 'subaru' },

          //Toyota
          { value: '4runner', label: '4Runner', brand: 'toyota' },
          { value: 'avalon', label: 'Avalon', brand: 'toyota' },
          { value: 'camry', label: 'Camry', brand: 'toyota' },
          { value: 'corolla', label: 'Corolla', brand: 'toyota' },
          { value: 'highlander', label: 'Highlander', brand: 'toyota' },
          { value: 'hilux', label: 'Hilux', brand: 'toyota' },
          { value: 'land-cruiser', label: 'Land Cruiser', brand: 'toyota' },
          { value: 'prius', label: 'Prius', brand: 'toyota' },
          { value: 'rav4', label: 'RAV4', brand: 'toyota' },
          { value: 'sequoia', label: 'Sequoia', brand: 'toyota' },
          { value: 'sienna', label: 'Sienna', brand: 'toyota' },
          { value: 'tacoma', label: 'Tacoma', brand: 'toyota' },
          { value: 'tundra', label: 'Tundra', brand: 'toyota' },
          { value: 'venza', label: 'Venza', brand: 'toyota' },
          { value: 'yaris', label: 'Yaris', brand: 'toyota' },
          { value: 'c-hr', label: 'C-HR', brand: 'toyota' },
          { value: '86', label: '86', brand: 'toyota' },

          //Volkswagen
          { value: 'arteon', label: 'Arteon', brand: 'volkswagen' },
          { value: 'atlas', label: 'Atlas', brand: 'volkswagen' },
          { value: 'beetle', label: 'Beetle', brand: 'volkswagen' },
          { value: 'golf', label: 'Golf', brand: 'volkswagen' },
          { value: 'jetta', label: 'Jetta', brand: 'volkswagen' },
          { value: 'passat', label: 'Passat', brand: 'volkswagen' },
          { value: 'tiguan', label: 'Tiguan', brand: 'volkswagen' },
          { value: 'touareg', label: 'Touareg', brand: 'volkswagen' },
          { value: 'id4', label: 'ID.4', brand: 'volkswagen' },

          //Volvo
          { value: 's60', label: 'S60', brand: 'volvo' },
          { value: 's90', label: 'S90', brand: 'volvo' },
          { value: 'v60', label: 'V60', brand: 'volvo' },
          { value: 'v90', label: 'V90', brand: 'volvo' },
          { value: 'xc40', label: 'XC40', brand: 'volvo' },
          { value: 'xc60', label: 'XC60', brand: 'volvo' },
          { value: 'xc70', label: 'XC70', brand: 'volvo' },
          { value: 'xc90', label: 'XC90', brand: 'volvo' },
          { value: 'c30', label: 'C30', brand: 'volvo' },
          { value: 'c70', label: 'C70', brand: 'volvo' },
          
        ];
      
        const filteredModelOptions = modelOptions.filter((option) => option.brand === brand);
      
        

        const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_boffcg4', 'template_tndmrm8', form.current, 'DtPcABmq46V7LARs0')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    clearForm();
    toast.success('Datos enviados correctamente. ¡Nos pondremos en contacto contigo lo antes posible!');
  };
  const clearForm = () => {
    setName('');
    setNumber('');
    setYear('null');
    setBrand('null');
    setModel('null');
    setPart('null');
  }
        
        return (
          <div>
            <form className='form-container' action="" ref={form} onSubmit={sendEmail}>
            <label className='label'>Nombre Completo:</label>
            <input type="text" className='custom-select' name='nombre' value={name} onChange={(e) => setName(e.target.value)}/>
            <label className='label'>Celular:</label>
            <input type="text" className='custom-select' name='celular' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <label className='label'>Año:</label>
            <select className='custom-select' onChange={(e) => setYear(e.target.value)} name='anio' value={year}>
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
      
            <label className='label'>Marca:</label>
            <select className='custom-select' onChange={(e) => setBrand(e.target.value)} name='marca' value={brand}>
              {brandOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
      
            <label className='label'>Modelo:</label>
            <select className='custom-select' onChange={(e) => setModel(e.target.value)}name='modelo' value={model}>
              {filteredModelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label className='label'>Repuesto:</label>
            <select className='custom-select' onChange={(e) => setPart(e.target.value)} name='repuesto' value={part}>
            {carPartsOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
      
            <button className='submit-button' type='submit'>
              Enviar
            </button>
            </form>
          </div>
        );
      }
};

export default FormAutos;