\c data_dev;

INSERT INTO carrera_models(model_name, price, power_in_hp, top_speed_mph, zero_to_sixty, description) VALUES
('Carrera Coupe', 106100, 379, 182, 4.0, 'A icon reborn. With instantly recognizable styling and the timeless flat-six, now turbo charged. When it comes to pratical sports cars, the 911 is still very difficult to beat, '),
('Carrera Cabriolet', 118900, 379, 180, 4.2, 'The open-top variant of the 911 heightens the 911 experience by adding freedom and fresh air. When closed, the Cabriolet maintains the same clean lines of the coupe models.'),
('Carrera 4 Coupe', 113400, 379, 180, 4.0, 'The 4 in Porsche Designation represents all wheel drive. The Carrera 4 adds additional traction over the standard Carrera.' ),
('Careera 4 Cabriolet', 126200, 179, 379, 4.2, 'With all-while drive and a state of the art folding top, the Carrera 4 Cabriolet is entry into the perfect year around sports car.'),
('Carrera S Coupe', 123000, 191, 443, 3.5, 'S stands for Sport an enhanced performance. The Carrera S provides enhanced power output over the the non-sport models.'),
('Carrera S Cabriolet', 135800, 190, 443, 3.7, 'The additional performance of S, with extra sunlight and air.'),
('Carrera 4S Coupe', 130300, 190, 443, 3.4, 'Not sure to go all-wheel drive or enhanced perfmance? Have both with the Carrera 4S'),
('Carrera 4S Cabriolet', 143100, 188, 443, 3.6, 'Extra speed. Extra grip. Extra sun. Extra Air. Enough said.'),
('Targa 4 Targa', 126200, 379, 179 , 4.2, 'Arguably the most stylish 911 model. The Targa incorperates the characteristic rollbar with an innovative roof concept. A future classic that combines the experience of an open tpp with the comfort and safety of an enclsoed car.'),
('Targas 4S Targa', 143100, 443, 188, 3.6, 'The style and experience of the iconic Porsche Targa, with the added traction and security of four wheel drive.'),
('GTS Coupe', 142600, 473, 193, 3.2, 'GTS models have not only enhanced perfomance, but a much sportier specification. GTS coupe is the most driver focused of standard Carreras.'),
('GTS Cabriolet', 155400, 473, 192, 3.4, 'Lightweight GTS package with open top make the GTS cabriolet the posterchild for canyon carving'),
('Carrera 4 GTS Coupe', 149900, 192, 473, 3.1, '4 GTS designation combines the sporting package with all wheel drive.'),
('Carrera 4 GTS Cabriolet', 162700, 190, 473, 3.3, 'All wheel drive for winter and an insulated convertible top for summer. 4 GTS cabriolet is the perfect year-around companion.'),
('Targas 4 GTS Targa', 162700, 473, 190, 3.3, 'High style of Targa. High practicality of 4. High performance of GTS.');

INSERT INTO turbo_models(model_name, price, power_in_hp, top_speed_mph, zero_to_sixty, description) VALUES
('Turbo Coupe', 182900, 572, 199, 2.7, 'Aside from the explosive acceleration, the 911 Turbo exhibits insane levels of cornering grip and strong brakes, making it a true performance powerhouse.' ),
('Turbo S Coupe', 216100, 640, 199, 2.6, 'Not the widowmaker 911 Turbo of old. Meticulous engineering make the even more powerful Turbo S accessible to every driver, regardless of skill'),
('Turbo Cabriolet', 195700, 572, 205, 2.8, 'The drop-top Porsche 911 Turbo has million-mile headroom and performance to blow away supercar A-listers'),
('Turbo S Cabriolet', 228900, 640, 205, 2.7, 'an open-air daily driver that hits 60 mph in just 2.7 seconds.');

INSERT INTO gt3_models(model_name, price, power_in_hp, top_speed_mph, zero_to_sixty, description) VALUES
('911 GT3', 169700, 502, 197, 3.2, 'The only 992-generation 911 that does not have a turbocharger, the GT3 brings 502 horses of naturally-aspirated joy. The 911 GT3 is not a daily driver, but you will want to drive it every day.'),
('911 GT3 with Touring Package', 169700, 502, 199, 3.7, 'The 911 GT3 with Touring Package also sets the performance tone - but with focus primarily on the road. Thanks to ingenious areodynamics, cornering remains impressive, even without a large rear wing.');

INSERT INTO porsche_911_gens(gen_name, year_began, year_ended, description) VALUES
('901', '1963', '1973', 'Designed as a larger, more practical version of the 356 with an extra pair of seats, the 901 was the beginning a icon. Early examples used a two-liter engine with only 130 horsepower, but the light weight of just over a ton made up for the lack of power. Engine output increased over the life of the production run, topping out with the 210 2.7 Carrera RS.'),
('G-series', '1973', '1989', 'The G generation marked a major change, with a very discernable difference in styling, and technology. This generation ran for almost 20 years. The most unique move was the introduction of turbocharging, represented by the Turbo model which featured 260 horsepower.' ),
('964', '1989', '1994', 'A mild syling change combined with tons of new tech, the 964 appeared to be very similar to the G series, but was 85 percent new. Four wheel drive arrived, along with power steering, ABS and airbags. Considered by many to be the least attractive 911, 964s could be found for relatively cheap on the classic market.'),
('993', '1994', '1998', 'Considered by many to have the most beautiful and purest 911 design, the 993 also represented the end of an era, by being the last air-cooled 911. The GT2 version of the 993 began the pratice of ultra high-performance 911s like the GT3.'),
('996', '1998', '2004', 'Undoubtably the most controversial 911, the 996 was derided by enthusiasts for "losing character" for the styling change to the headlights and use of a water-cooled engine, as well as the sharing of body panels with the cheaper Boxter model. However, the 996 is the 911 that saved Porsche, being the first mass-produced model. It marked the exponential growth in 911 variants, and the launch of the first ever GT3 variant.'),
('997', '2004', '2011', 'Round headlights made a return with the all-new 997. The 997 was the first 911 generation where all models had more than 300 horsepower, with a GT2 variant with 530 horspower. It was not without criticism though, with claims of "deminished character" revolving around steering feel and ironically, it being too "secure" in turns due to stronger grip.'),
('991', '2011', '2018', 'The 991 was considered one the best-looking 911s in decades, especially with the new Targa version. There were criticisms regarding the electric steering and the eventual use of turbo engines in almost all variants in the 991.2 version, but that did not stop solid sales for the 991, which included the sale of the one-millionth 911.'),
('992', '2018', null, 'The current 992-generaton marked perhaps the most extreme styling chage for the 911, with a long light bar in the back and full track width for all models, not just the four-wheel drive and motorsport models. The turbocharged flat-six engines remain, with incredibly low emmssons, yet more power. The 992 shows that high performance cars can join the fight for climate change. With the 992, there are also talks of the first hybrid 911 becoming a reality.');