import { Module } from "@nestjs/common";
import { AlgoliaService } from "./algolia.service";
import { AlgoliaController } from "./algolia.controller";
import { AlgoliaResolver } from "./algolia.resolver";

@Module({
  controllers: [AlgoliaController],
  providers: [AlgoliaService, AlgoliaResolver],
  exports: [AlgoliaService],
})
export class AlgoliaModule {}
