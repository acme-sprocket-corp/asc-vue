<template>
  <div>
    <TableElement :headers="headers">
      <slot></slot>
    </TableElement>
    <nav aria-label="Page Navigation" class="d-flex justify-content-between">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="pageIndex in pageCount"
          :key="pageIndex"
          class="page-item"
          :class="pageIsActive(pageIndex)"
        >
          <button class="page-link" @click="pageChange(pageIndex)">
            {{ pageIndex }}
          </button>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <div class="d-flex gap-2 mb-3">
        <div class="d-flex gap-2">
          <label :for="pageSizeId">Page Size:</label>
          <div>
            <select
              :id="pageSizeId"
              :value="pageSize"
              class="form-select form-select-sm"
              @change="handlePageSizeChange"
              @blur="handlePageSizeChange"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <p>1 - 10 of {{ entityCount }} entities</p>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { TableElement } from "@/common";
import type { TableElementProperties } from "../table/TableElement.vue";
import { computed } from "vue";

export interface PaginatedTableProperties extends TableElementProperties {
  pageChange: (pageIndex: number) => void;
  pageSizeChange: (pageSize: number) => void;
  entityCount: number;
  currentPage: number;
  pageSize: number;
}

const properties = defineProps<PaginatedTableProperties>();

const pageSizeId = Math.random().toString();

const pageCount = computed<number>(() =>
  Math.ceil(properties.entityCount / properties.pageSize)
);

const pageIsActive = (pageIndex: number): string => {
  if (pageIndex === properties.currentPage) {
    return "active";
  }
  return "";
};

const handlePageSizeChange = (event: Event): void => {
  const newPageSize = Number.parseInt(
    (event.target as HTMLSelectElement).value
  );

  properties.pageSizeChange(newPageSize);
};
</script>
