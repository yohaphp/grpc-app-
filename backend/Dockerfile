FROM php:7.3-cli

WORKDIR /app

# Install required system packages and grpc extension
RUN apt-get update && apt-get install -y \
    unzip git libprotobuf-dev protobuf-compiler curl \
    && pecl install grpc-1.38.0 \
    && docker-php-ext-enable grpc \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer \
    | php -- --install-dir=/usr/local/bin --filename=composer

# Copy app files
COPY . /app

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Install RoadRunner manually
RUN curl -L -o rr.tar.gz https://github.com/roadrunner-server/roadrunner/releases/download/v2023.3.4/roadrunner-linux-amd64.tar.gz \
    && mkdir -p /usr/local/bin/rr-temp \
    && tar -xzf rr.tar.gz -C /usr/local/bin/rr-temp \
    && mv /usr/local/bin/rr-temp/roadrunner /usr/local/bin/rr \
    && chmod +x /usr/local/bin/rr \
    && rm -rf rr.tar.gz /usr/local/bin/rr-temp

# Start the app
CMD ["php", "server.php"]
# CMD ["rr", "serve", "-c", ".rr.yaml"]
