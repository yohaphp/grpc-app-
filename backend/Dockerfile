FROM php:7.3-cli

WORKDIR /app

# 1. Install gRPC extension + deps
RUN apt-get update && apt-get install -y \
    unzip git libprotobuf-dev protobuf-compiler curl \
  && pecl install grpc-1.38.0 \
  && docker-php-ext-enable grpc \
  && rm -rf /var/lib/apt/lists/*

# 2. Install Composer
RUN curl -sS https://getcomposer.org/installer \
  | php -- --install-dir=/usr/local/bin --filename=composer

# 3. Copy code & install PHP deps
COPY . /app
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# 4. Expose gRPC port
EXPOSE 50051

# 5. Start built-in gRPC server
CMD ["php", "server.php"]
