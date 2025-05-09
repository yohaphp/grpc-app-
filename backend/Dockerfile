FROM php:7.3-cli

RUN apt-get update && apt-get install -y \
    unzip git libprotobuf-dev protobuf-compiler curl \
    && pecl install grpc \
    && docker-php-ext-enable grpc

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

# Install Spiral gRPC
COPY . /app
# RUN composer require spiral/php-grpc "^1.4"

# Download and move protoc-gen-php-grpc
RUN curl -L -o /usr/local/bin/protoc-gen-php-grpc https://github.com/spiral/php-grpc/releases/download/v1.4.0/protoc-gen-php-grpc-1.4.0-linux-amd64.tar.gz \
    && tar -xzf /usr/local/bin/protoc-gen-php-grpc -C /usr/local/bin/ \
    && chmod +x /usr/local/bin/protoc-gen-php-grpc

EXPOSE 50051

CMD ["php", "server.php"]
