<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */

namespace Spiral\GRPC;

use Google\Protobuf\Internal\Message;
use Spiral\GRPC\Exception\InvokeException;

class Invoker implements InvokerInterface
{
    /**
     * @inheritdoc
     */
    public function invoke(
        ServiceInterface $service,
        Method $method,
        ContextInterface $context,
        string $input
    ): string {
        $out = call_user_func(
            [$service, $method->getName()],
            $context,
            $this->makeInput($method, $input)
        );

        try {
            return $out->serializeToString();
        } catch (\Throwable $e) {
            throw new InvokeException($e->getMessage(), StatusCode::INTERNAL, $e);
        }
    }

    /**
     * @param Method $method
     * @param string $body
     * @return Message
     *
     * @throws InvokeException
     */
    private function makeInput(Method $method, string $body): Message
    {
        try {
            $class = $method->getInputType();

            /** @var Message $in */
            $in = new $class;
            $in->mergeFromString($body);

            return $in;
        } catch (\Throwable $e) {
            throw new InvokeException($e->getMessage(), StatusCode::INTERNAL, $e);
        }
    }
}