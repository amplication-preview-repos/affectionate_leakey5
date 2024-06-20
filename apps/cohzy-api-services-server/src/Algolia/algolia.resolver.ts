import * as graphql from "@nestjs/graphql";
import { AlgoliaInputDto } from "../algolia/AlgoliaInputDto";
import { AlgoliaService } from "./algolia.service";

export class AlgoliaResolver {
  constructor(protected readonly service: AlgoliaService) {}

  @graphql.Mutation(() => String)
  async SendDataToAlgolia(
    @graphql.Args()
    args: AlgoliaInputDto
  ): Promise<string> {
    return this.service.SendDataToAlgolia(args);
  }
}
