-- Insert sample products (we'll create a dummy seller first)
INSERT INTO public.profiles (user_id, full_name, is_seller) VALUES 
('00000000-0000-0000-0000-000000000001', 'Sample Seller', true);

-- Insert sample products
INSERT INTO public.products (seller_id, category_id, title, description, price, original_price, discount_percentage, image_url, stock_quantity, is_new, rating, reviews_count) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Electronics' LIMIT 1),
  'Wireless Bluetooth Headphones - Premium Sound Quality',
  'High-quality wireless headphones with noise cancellation and crystal clear sound.',
  2999,
  3999,
  25,
  '/placeholder.svg',
  50,
  false,
  4.5,
  128
),
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Electronics' LIMIT 1),
  'Smart Fitness Watch with Heart Rate Monitor',
  'Advanced fitness tracking with heart rate monitoring and GPS.',
  16999,
  24999,
  32,
  '/placeholder.svg',
  30,
  true,
  4.7,
  89
),
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Electronics' LIMIT 1),
  'Gaming Laptop - High Performance for Work and Play',
  'Ultra-fast gaming laptop with latest GPU and SSD storage.',
  74999,
  99999,
  25,
  '/placeholder.svg',
  15,
  false,
  4.3,
  45
),
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Fashion' LIMIT 1),
  'Premium Winter Jacket - Water Resistant',
  'Stylish and warm winter jacket perfect for cold weather.',
  4999,
  6999,
  28,
  '/placeholder.svg',
  25,
  false,
  4.6,
  67
),
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Home & Garden' LIMIT 1),
  'Smart Home Security Camera System',
  'Complete home security solution with mobile app control.',
  12999,
  17999,
  27,
  '/placeholder.svg',
  20,
  true,
  4.4,
  156
),
(
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE name = 'Books' LIMIT 1),
  'Complete Web Development Guide 2024',
  'Comprehensive guide to modern web development techniques.',
  1999,
  2999,
  33,
  '/placeholder.svg',
  100,
  true,
  4.8,
  234
);